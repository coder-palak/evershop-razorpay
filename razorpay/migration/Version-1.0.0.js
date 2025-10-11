import { execute } from '@evershop/postgres-query-builder';

// Create Razorpay payment settings
export default async (connection) => {
  // Add Razorpay settings to the setting table
  await execute(
    connection,
    `INSERT INTO setting (name, value, is_json) 
     VALUES 
       ('razorpayPaymentStatus', '0', FALSE),
       ('razorpayDisplayName', 'Razorpay', FALSE),
       ('razorpayKeyId', '', FALSE),
       ('razorpayKeySecret', '', FALSE)
     ON CONFLICT (name) DO NOTHING`
  );
};
