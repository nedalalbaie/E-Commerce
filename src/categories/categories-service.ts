import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Category, AddCategoryRequest, EditCategoryRequest } from './models/Category'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getCategories = (params: PaginationParams): Promise<List<Category[]>> => {
  return apiClient
    .addon(queryString)
    .url('/category')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const addCategory = (body: AddCategoryRequest): Promise<Category> => {
  return apiClient
    .url('/category')
    .post(body)
    .json((res) => {
      return res
    })
}

const editCategory = (id: string, body: EditCategoryRequest): Promise<Category> => {
  return apiClient
    .url(`/category/${id}`)
    .patch({
      id,
      ...body
    })
    .json((res) => {
      return res
    })
}

export { getCategories, addCategory, editCategory }
