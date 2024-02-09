import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Discount, DiscountFormRequest } from './models/discount'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getDiscounts = (params: PaginationParams): Promise<{ data: List<Discount[]> }> => {
  return apiClient
    .addon(queryString)
    .url('/discount')
    .query(params)
    .get()
    .notFound(() => ({
      data: []
    }))
    .json()
}

const getDiscount = (id: number): Promise<Discount> => {
  return apiClient.url(`/discount/${id}`).get().json()
}

const postDiscount = (body: DiscountFormRequest): Promise<Discount> => {
  return apiClient
    .url('/discount')
    .post(body)
    .json((res) => {
      return res
    })
}

const editDiscount = (id: number, body: Partial<DiscountFormRequest>): Promise<Discount> => {
  return apiClient
    .url(`/discount/${id}`)
    .put(body)
    .json((res) => {
      return res
    })
}

export { getDiscounts, getDiscount, postDiscount, editDiscount }
