import { registerPaymentMethod } from '../checkout/services/getAvailablePaymentMethos.js';
import { getSetting } from '../setting/services/setting.js';

export default async () => {
  console.log('🔵 RAZORPAY BOOTSTRAP: Starting...');
  
  try {
    // Register Razorpay as a payment method
    registerPaymentMethod({
      init: async () => {
        console.log('🔵 RAZORPAY: init() called');
        const displayName = await getSetting('razorpayDisplayName', 'Razorpay');
        console.log('🔵 RAZORPAY: Display name:', displayName);
        return {
          methodCode: 'razorpay',
          methodName: displayName
        };
      },
      validator: async () => {
        console.log('🔵 RAZORPAY: validator() called');
        const razorpayStatus = await getSetting('razorpayPaymentStatus', 0);
        console.log('🔵 RAZORPAY: Status:', razorpayStatus);
        const isEnabled = parseInt(razorpayStatus, 10) === 1;
        console.log('🔵 RAZORPAY: Is enabled:', isEnabled);
        return isEnabled;
      }
    });
    
    console.log('🔵 RAZORPAY BOOTSTRAP: Completed successfully');
  } catch (error) {
    console.error('❌ RAZORPAY BOOTSTRAP ERROR:', error);
  }
};
