// lib/createSignature.ts
import CryptoJS from 'crypto-js';
import { v4 as uuidv4 } from 'uuid';

export async function createSignature(amount: string, tax_amount: string, total_amount: string, product_code: string) {
  // Generate a transaction UUID
  const transaction_uuid = uuidv4();

  // Define the signed fields
  const signed_field_names = 'total_amount,transaction_uuid,product_code';

  // Create a string to sign
  const stringToSign = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

  // Generate the signature using HMAC SHA-256 and encode it in Base64
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY||"TESTING"; // Replace this with your actual secret key
  const hash = CryptoJS.HmacSHA256(stringToSign, secretKey);
  const signature = CryptoJS.enc.Base64.stringify(hash);

  return { transaction_uuid, signature };
}
