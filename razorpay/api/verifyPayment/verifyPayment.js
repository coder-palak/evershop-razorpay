import crypto from 'crypto';
import { update, select } from '@evershop/postgres-query-builder';
import { pool } from '@evershop/evershop/lib/postgres';

async function getSetting(name, defaultValue) {
  const setting = await select()
    .from('setting')
    .where('name', '=', name)
    .load(pool);
  
  return setting ? setting.value : defaultValue;
}

export default async (request, response) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId
    } = request.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !orderId) {
      return response.status(400).json({
        success: false,
        message: 'Missing required payment details'
      });
    }

    // Get Razorpay key secret
    const keySecret = await getSetting('razorpayKeySecret', '');

    if (!keySecret) {
      return response.status(500).json({
        success: false,
        message: 'Razorpay is not configured properly'
      });
    }

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(body.toString())
      .digest('hex');

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      return response.status(400).json({
        success: false,
        message: 'Invalid payment signature'
      });
    }

    // Update order payment status
    await update('order')
      .given({
        payment_status: 'paid',
        payment_method: 'razorpay',
        razorpay_order_id: razorpay_order_id,
        razorpay_payment_id: razorpay_payment_id
      })
      .where('uuid', '=', orderId)
      .execute(pool);

    // Get updated order
    const order = await select()
      .from('order')
      .where('uuid', '=', orderId)
      .load(pool);

    return response.json({
      success: true,
      message: 'Payment verified successfully',
      order: {
        id: order.uuid,
        orderNumber: order.order_number,
        paymentStatus: order.payment_status
      }
    });
  } catch (error) {
    console.error('Razorpay payment verification error:', error);
    return response.status(500).json({
      success: false,
      message: error.message || 'Failed to verify payment'
    });
  }
};
