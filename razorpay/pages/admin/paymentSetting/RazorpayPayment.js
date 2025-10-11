import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import PropTypes from 'prop-types';
import React from 'react';

console.log('🟡 RAZORPAY COMPONENT: Module loaded!');

export default function RazorpayPayment({ setting: { razorpayPaymentStatus, razorpayDisplayName, razorpayKeyId, razorpayKeySecret } }) {
    console.log('🟡 RAZORPAY COMPONENT: Rendering with settings:', { razorpayPaymentStatus, razorpayDisplayName, razorpayKeyId, razorpayKeySecret });
    return (React.createElement(Card, { title: "Razorpay Payment" },
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Enable?")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Toggle, { name: "razorpayPaymentStatus", value: razorpayPaymentStatus })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Display Name")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "razorpayDisplayName", placeholder: "Display Name", value: razorpayDisplayName })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Key ID")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "razorpayKeyId", placeholder: "Key ID", value: razorpayKeyId })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Key Secret")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "razorpayKeySecret", placeholder: "Key Secret", value: razorpayKeySecret }))))));
}

RazorpayPayment.propTypes = {
    setting: PropTypes.shape({
        razorpayPaymentStatus: PropTypes.number,
        razorpayDisplayName: PropTypes.string,
        razorpayKeyId: PropTypes.string,
        razorpayKeySecret: PropTypes.string
    }).isRequired
};

export const layout = {
    areaId: 'paymentSetting',
    sortOrder: 15
};

export const query = `
  query Query {
    setting {
      razorpayDisplayName
      razorpayPaymentStatus
      razorpayKeyId
      razorpayKeySecret
    }
  }
`;
