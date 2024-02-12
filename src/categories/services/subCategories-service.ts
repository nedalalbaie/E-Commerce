import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import formData from 'wretch/addons/formData'
import type { SubCategory, CreateOrPatchSubCategory } from '../models/SubCategory'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getSubCategories = (params: PaginationParams): Promise<List<SubCategory[]>> => {
  return apiClient
    .addon(queryString)
    .url('/subCategory')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const getSubCategory = (id: number): Promise<SubCategory> => {
  return apiClient.url(`/subCategory/${id}`).get().json()
}

const addSubCategory = (body: CreateOrPatchSubCategory): Promise<SubCategory> => {
  return apiClient
    .addon(formData)
    .url('/subCategory')
    .formData(body)
    .post()
    .json((res) => {
      return res
    })
}

const editSubCategory = (id: string, body: CreateOrPatchSubCategory): Promise<SubCategory> => {
  return apiClient
    .addon(formData)
    .url(`/subCategory/${id}`)
    .formData(body)
    .put()
    .json((res) => {
      return res
    })
}

const deleteSubCategory = (id: number) => {
  return apiClient.url(`/subCategory/${id}`).delete().json()
}

export { getSubCategories, getSubCategory, addSubCategory, editSubCategory, deleteSubCategory }
