# EverShop Razorpay Extension

Razorpay payment gateway integration for EverShop - Supporting UPI, Cards, Net Banking, and Wallets for Indian market.

## Compatibility

- **v2.x**: EverShop 2.0.1+ (ES Modules) 
- **v1.x**: EverShop 1.x (CommonJS) - deprecated 

## Installation

```bash
npm install evershop-razorpay
```

Add the extension to your `config/default.json` file:

```json
{
  "system": {
    "extensions": [
      {
        "name": "razorpay",
        "resolve": "node_modules/evershop-razorpay",
        "enabled": true
      }
    ]
  }
}
```

## Breaking Changes in v2.0.0

 **This version requires EverShop 2.0.1 or higher**

- Converted to ES modules (no longer compatible with CommonJS)
- Fixed typo: `razorpayDislayName` → `razorpayDisplayName`
- Uses exported EverShop APIs only
- Requires Node.js 18+

### Migration from v1.x

1. Update EverShop to 2.0.1+
2. Update evershop-razorpay to 2.0.0
3. Update config path: `node_modules/evershop-razorpay/razorpay` → `node_modules/evershop-razorpay`
4. Run `npm run build`
5. Restart server

## Configuration

1. Go to **Admin → Settings → Payment Settings**
2. Find **Razorpay Payment** section
3. Configure:
   - Enable toggle
   - Display name (e.g., "UPI/Cards/Wallets")
   - Key ID from [Razorpay Dashboard](https://dashboard.razorpay.com/app/keys)
   - Key Secret
4. Save

## Supported Payment Methods

- **UPI**: Google Pay, PhonePe, Paytm, BHIM
- **Cards**: Visa, Mastercard, RuPay, Amex
- **Net Banking**: All major Indian banks
- **Wallets**: Paytm, PhonePe, Mobikwik

## License

ISC