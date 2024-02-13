import apiClient from '@/core/helpers/api-client'
import formData from 'wretch/addons/formData'
import type { Ad, PostAdRequest, PatchAdRequest } from './models/ads'
import type { List } from '@/core/models/list'

const getAds = (): Promise<{ result: List<Ad[]> }> => {
  return apiClient
    .url('/ads')
    .get()
    .notFound(() => ({
      data: [],
      totalRecords: 0
    }))
    .json()
}

const getAd = (id: number): Promise<Ad> => {
  return apiClient.url(`/ads/${id}`).get().json()
}

const postAd = (body: PostAdRequest): Promise<Ad> => {
  return apiClient
    .addon(formData)
    .url('/ads')
    .formData(body)
    .post(body)
    .json((res) => {
      return res
    })
}

const patchAd = (id: string, body: Partial<PatchAdRequest>): Promise<Ad> => {
  return apiClient
    .addon(formData)
    .url(`/ads/${id}`)
    .formData(body)
    .patch(body)
    .json((res) => {
      return res
    })
}

const deleteAd = (id: number) => {
  return apiClient.url(`/ads/${id}`).delete().json()
}

export { getAds, getAd, postAd, patchAd, deleteAd }
