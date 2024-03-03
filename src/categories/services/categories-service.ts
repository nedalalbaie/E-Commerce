import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import formData from 'wretch/addons/formData'
import type { AddCategoryRequest, Category, EditCategoryRequest } from '../models/Category'
import type { PaginationParams } from '@/core/models/pagination-params'

const getCategories = (params: PaginationParams): Promise<Category[]> => {
  return apiClient
    .addon(queryString)
    .url('/categories')
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
    .url('/categories')
    .formData(body)
    .post()
    .json((res) => {
      return res
    })
}

const editCategory = (id: string, body: EditCategoryRequest): Promise<Category> => {
  return apiClient
    .addon(formData)
    .url(`/categories/${id}`)
    .formData(body)
    .put()
    .json((res) => {
      return res
    })
}

const deleteCategory = (id: number) => {
  return apiClient.url(`/categories/${id}`).delete().json()
}

export { getCategories, addCategory, editCategory, deleteCategory }
