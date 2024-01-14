import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Product, AddProductRequest } from './models/product'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getProducts = (params: PaginationParams): Promise<List<Product[]>> => {
  return apiClient
    .addon(queryString)
    .url('/products')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const addProduct = (body: AddProductRequest): Promise<Product> => {
  return apiClient
    .url('/products')
    .post(body)
    .json((res) => {
      return res
    })
}

const editProduct = (id: string, body: Partial<AddProductRequest>): Promise<Product> => {
  return apiClient
    .url(`/products/${id}`)
    .patch({
      id,
      ...body
    })
    .json((res) => {
      return res
    })
}

export { getProducts, addProduct, editProduct }
