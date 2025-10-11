import { select } from '@evershop/postgres-query-builder';
import { pool } from '@evershop/evershop/lib/postgres';

async function getSetting(name, defaultValue) {
  const setting = await select()
    .from('setting')
    .where('name', '=', name)
    .load(pool);
  
  return setting ? setting.value : defaultValue;
}

export default {
  Setting: {
    razorpayPaymentStatus: async () => {
      console.log('🟢 RAZORPAY RESOLVER: razorpayPaymentStatus called');
      const value = parseInt(await getSetting('razorpayPaymentStatus', '0'), 10);
      console.log('🟢 RAZORPAY RESOLVER: razorpayPaymentStatus =', value);
      return value;
    },
    razorpayDisplayName: async () => {
      console.log('🟢 RAZORPAY RESOLVER: razorpayDisplayName called');
      const value = await getSetting('razorpayDisplayName', 'Razorpay');
      console.log('🟢 RAZORPAY RESOLVER: razorpayDisplayName =', value);
      return value;
    },
    razorpayKeyId: async () => {
      console.log('🟢 RAZORPAY RESOLVER: razorpayKeyId called');
      const value = await getSetting('razorpayKeyId', '');
      console.log('🟢 RAZORPAY RESOLVER: razorpayKeyId =', value);
      return value;
    },
    razorpayKeySecret: async (_, __, { userTokenPayload }) => {
      console.log('🟢 RAZORPAY RESOLVER: razorpayKeySecret called');
      // Only return the key to authenticated admin users
      if (userTokenPayload && userTokenPayload?.user?.uuid) {
        const value = await getSetting('razorpayKeySecret', '');
        console.log('🟢 RAZORPAY RESOLVER: razorpayKeySecret =', value);
        return value;
      }
      console.log('🟢 RAZORPAY RESOLVER: razorpayKeySecret = null (not authenticated)');
      return null;
    }
  }
};
