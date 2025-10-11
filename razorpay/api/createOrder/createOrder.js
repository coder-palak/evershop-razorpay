import Razorpay from 'razorpay';
import { select } from '@evershop/postgres-query-builder';
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
    const { orderId } = request.body;

    if (!orderId) {
      return response.status(400).json({
        success: false,
        message: 'Order ID is required'
      });
    }

    // Get the order from database
    const order = await select()
      .from('order')
      .where('uuid', '=', orderId)
      .load(pool);

    if (!order) {
      return response.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Get Razorpay credentials
    const keyId = await getSetting('razorpayKeyId', '');
    const keySecret = await getSetting('razorpayKeySecret', '');

    if (!keyId || !keySecret) {
      return response.status(500).json({
        success: false,
        message: 'Razorpay is not configured properly'
      });
    }

    // Initialize Razorpay
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret
    });

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(parseFloat(order.grand_total) * 100), // Amount in paise
      currency: 'INR',
      receipt: order.order_number,
      notes: {
        order_id: order.uuid,
        order_number: order.order_number
      }
    });

    return response.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: keyId
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    return response.status(500).json({
      success: false,
      message: error.message || 'Failed to create Razorpay order'
    });
  }
};
