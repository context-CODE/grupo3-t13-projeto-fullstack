import { z } from 'zod';
import { DeepPartial } from '@chakra-ui/react';
import { addressReqSchema } from '@/schemas/addresses.schema';

export type iAddressReq = z.infer<typeof addressReqSchema>;

export type iAddressReqUpdate = DeepPartial<iAddressReq>;

export interface iAddressRes {
  id: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
  updated_at: Date;
}
