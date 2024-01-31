import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Order, PostOrderRequest, PatchOrderRequest } from './models/order'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getOrders = (params: PaginationParams): Promise<List<Order[]>> => {
  return apiClient
    .addon(queryString)
    .url('/orders')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const postOrder = (body: PostOrderRequest): Promise<Order> => {
  return apiClient
    .url('/orders')
    .post(body)
    .json((res) => {
      return res
    })
}

const patchOrder = (id: string, body: Partial<PatchOrderRequest>): Promise<Order> => {
  return apiClient
    .url(`/orders/${id}`)
    .patch({
      id,
      ...body
    })
    .json((res) => {
      return res
    })
}

export { getOrders, postOrder, patchOrder }
