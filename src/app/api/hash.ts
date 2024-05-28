// pages/api/hash.ts
import { NextApiRequest, NextApiResponse } from 'next';
import CryptoJS from 'crypto-js';

type Data = {
  hash?: string;
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { message, secret } = req.body;

    if (typeof message !== 'string' || typeof secret !== 'string') {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const hash = CryptoJS.HmacSHA256(message, secret);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

    res.status(200).json({ hash: hashInBase64 });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
