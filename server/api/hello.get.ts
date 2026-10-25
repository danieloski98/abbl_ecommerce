import { ReturnType } from '#shared/models/ReturnType'
export default defineEventHandler(async (event): Promise<ReturnType<any>> => {
  return new ReturnType({
    message: 'Hello Nitro',
    success: true,
    statusCode: 200,
    data: {}
  })
})
