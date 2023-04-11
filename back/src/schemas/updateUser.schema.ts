import { object, string, boolean, date } from 'zod'

export const userUpdateRequestZod = object({
    name: string(),
    phone: string(),
    email: string(),
  })

export const userResponseZod = object({
    id: string(),
    name: string(),
    phone: string(),
    email: string(),
    isActive: boolean().default(true),
    createdAt: date(),
})