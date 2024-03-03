import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Bill, CreateBill } from './models/bill'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getBills = (params: PaginationParams): Promise<List<Bill[]>> => {
  return apiClient
    .addon(queryString)
    .url('/bills')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const postBill = (body: CreateBill): Promise<Bill> => {
  return apiClient
    .url('/bills')
    .post(body)
    .json((res) => {
      return res
    })
}

const patchBill = (id: number, body: Partial<CreateBill>): Promise<Bill> => {
  return apiClient
    .url(`/bills/${id}`)
    .patch(body)
    .json((res) => {
      return res
    })
}

const cancelBill = (id: number) => {
  return apiClient.url(`/bills/${id}`).delete().json()
}

export { getBills, postBill, patchBill, cancelBill }
