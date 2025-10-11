import { select } from '@evershop/postgres-query-builder';
import { pool } from '@evershop/evershop/lib/postgres';

async function getSetting(name, defaultValue) {
  const setting = await select()
    .from('setting')
    .where('name', '=', name)
    .load(pool);
  
  return setting ? setting.value : defaultValue;
}

export default async (request, response, delegate, next) => {
  // Check if Razorpay is enabled
  const status = await getSetting('razorpayPaymentStatus', '0');
  
  if (parseInt(status, 10) === 1) {
    const displayName = await getSetting('razorpayDisplayName', 'Razorpay');
    
    // Add Razorpay to available payment methods
    const methods = delegate.paymentMethods || [];
    methods.push({
      code: 'razorpay',
      name: displayName
    });
    
    delegate.paymentMethods = methods;
  }
  
  next();
};

export const sortOrder = 20;
