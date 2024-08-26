// src/pages/Payment/Payment.jsx
import React from 'react';
import { PaymentContainer, PaymentHeader, PaymentForm, FormField, SubmitButton } from './Payment.styled';

const Payment = () => {
  return (
    <PaymentContainer>
      <PaymentHeader>Payment</PaymentHeader>
      <PaymentForm>
        <FormField>
          <label>Card Number:</label>
          <input type="text" placeholder="Enter your card number" />
        </FormField>
        <FormField>
          <label>Expiry Date:</label>
          <input type="text" placeholder="MM/YY" />
        </FormField>
        <FormField>
          <label>CVV:</label>
          <input type="text" placeholder="Enter CVV" />
        </FormField>
        <FormField>
          <label>Cardholder Name:</label>
          <input type="text" placeholder="Enter cardholder name" />
        </FormField>
        <SubmitButton>Make Payment</SubmitButton>
      </PaymentForm>
    </PaymentContainer>
  );
};

export default Payment;
