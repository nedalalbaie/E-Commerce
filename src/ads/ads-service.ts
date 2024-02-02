import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Ad, PostAdRequest, PatchAdRequest } from './models/ads'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getAds = (params: PaginationParams): Promise<{ data: List<Ad[]> }> => {
  return apiClient
    .addon(queryString)
    .url('/ads')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const getAd = (id: number): Promise<Ad> => {
  return apiClient
   .url(`/ads/${id}`)
   .get()
   .json()
}

const postAd = (body: PostAdRequest): Promise<Ad> => {
  return apiClient
    .url('/ads')
    .post(body)
    .json((res) => {
      return res
    })
}

const patchAd = (id: string, body: Partial<PatchAdRequest>): Promise<Ad> => {
  return apiClient
    .url(`/ads/${id}`)
    .patch(body)
    .json((res) => {
      return res
    })
}

const deleteAd = (id: number) => {
  return apiClient
   .url(`/ads/${id}`)
   .delete()
   .json()
}

export { getAds, getAd, postAd, patchAd, deleteAd }
