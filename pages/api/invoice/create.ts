// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { api as fetchTokens } from '@zaruda/zetpay-core';

export interface CreateInvoiceResponse {
  sessionId: string;
  formToken: string;
  payformUrl: string;
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<CreateInvoiceResponse>
) {
  const data = await fetchTokens();

  res.status(200).json(data);
}
