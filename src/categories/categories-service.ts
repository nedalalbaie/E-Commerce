import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import formData from 'wretch/addons/formData'
import type { AddCategoryRequest, Category, EditCategoryRequest } from './models/Category'
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
    .addon(formData)
    .url('/category')
    .formData(body)
    .post()
    .json((res) => {
      return res
    })
}

const editCategory = (id: string, body: EditCategoryRequest): Promise<Category> => {
  return apiClient
    .addon(formData)
    .url(`/category/${id}`)
    .formData(body)
    .put()
    .json((res) => {
      return res
    })
}

export { getCategories, addCategory, editCategory }
