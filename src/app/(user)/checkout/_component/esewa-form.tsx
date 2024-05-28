// components/ESewaForm.js
import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const ESewaForm = () => {
  const [formData, setFormData] = useState({
    amount: '100',
    tax_amount: '0',
    total_amount: '100',
    transaction_uuid: '',
    product_code: 'EPAYTEST',
    product_service_charge: '0',
    product_delivery_charge: '0',
    success_url: process.env.NEXT_PUBLIC_APP_URL||'http://localhost:3000' + '/checkout/success',
    failure_url: process.env.NEXT_PUBLIC_APP_URL||'http://localhost:3000' + '/checkout/failure',
    signed_field_names: 'total_amount,transaction_uuid,product_code',
    signature: '',
    secret: '8gBm/:&EnhH.1/q',
  });

  useEffect(() => {
    generateSignature();
  }, [
    formData.total_amount,
    formData.transaction_uuid,
    formData.product_code,
    formData.secret,
  ]);

  const generateSignature = () => {
    const currentTime = new Date();
    const formattedTime =
      currentTime.toISOString().slice(2, 10).replace(/-/g, '') +
      '-' +
      currentTime.getHours() +
      currentTime.getMinutes() +
      currentTime.getSeconds();
    const newUUID = formattedTime;

    const { total_amount, product_code, secret } = formData;
    const transaction_uuid = newUUID;

    const hash = CryptoJS.HmacSHA256(
      `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`,
      secret
    );
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    setFormData((prevData) => ({
      ...prevData,
      transaction_uuid: newUUID,
      signature: hashInBase64,
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form: any = document.getElementById('esewaForm');
    form.submit();
  };
  useEffect(() => {
    generateSignature();
  }, []);
  return (
    <form
      action='https://rc-epay.esewa.com.np/api/epay/main/v2/form'
      method='POST'
      onSubmit={handleSubmit}
      id='esewaForm'
      target='_blank'>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Parameter</strong>
            </td>
            <td>
              <strong>Value</strong>
            </td>
          </tr>
          <tr>
            <td>Amount:</td>
            <td>
              <input
                type='text'
                id='amount'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Tax Amount:</td>
            <td>
              <input
                type='text'
                id='tax_amount'
                name='tax_amount'
                value={formData.tax_amount}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Total Amount:</td>
            <td>
              <input
                type='text'
                id='total_amount'
                name='total_amount'
                value={formData.total_amount}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Transaction UUID:</td>
            <td>
              <input
                type='text'
                id='transaction_uuid'
                name='transaction_uuid'
                value={formData.transaction_uuid}
                readOnly
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Code:</td>
            <td>
              <input
                type='text'
                id='product_code'
                name='product_code'
                value={formData.product_code}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Service Charge:</td>
            <td>
              <input
                type='text'
                id='product_service_charge'
                name='product_service_charge'
                value={formData.product_service_charge}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Product Delivery Charge:</td>
            <td>
              <input
                type='text'
                id='product_delivery_charge'
                name='product_delivery_charge'
                value={formData.product_delivery_charge}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Success URL:</td>
            <td>
              <input
                type='text'
                id='success_url'
                name='success_url'
                value={formData.success_url}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Failure URL:</td>
            <td>
              <input
                type='text'
                id='failure_url'
                name='failure_url'
                value={formData.failure_url}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Signed Field Names:</td>
            <td>
              <input
                type='text'
                id='signed_field_names'
                name='signed_field_names'
                value={formData.signed_field_names}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Signature:</td>
            <td>
              <input
                type='text'
                id='signature'
                name='signature'
                value={formData.signature}
                readOnly
                required
              />
            </td>
          </tr>
          <tr>
            <td>Secret Key:</td>
            <td>
              <input
                type='text'
                id='secret'
                name='secret'
                value={formData.secret}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
      <input
        value='Pay with eSewa'
        type='submit'
        className='button'
        style={{
          display: 'block',
          backgroundColor: '#60bb46',
          cursor: 'pointer',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
        }}
      />
    </form>
  );
};

export default ESewaForm;
