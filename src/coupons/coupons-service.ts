import apiClient from '@/core/helpers/api-client'
import queryString from 'wretch/addons/queryString'
import type { Coupon, CouponFormRequest } from './models/coupon'
import type { PaginationParams } from '@/core/models/pagination-params'
import type { List } from '@/core/models/list'

const getCoupons = (params: PaginationParams): Promise<{ data: List<Coupon[]> }> => {
  return apiClient
    .addon(queryString)
    .url('/coupons')
    .query(params)
    .get()
    .notFound(() => ({
      data: [],
    }))
    .json()
}

const getCoupon = (id: number): Promise<Coupon> => {
  return apiClient
    .url(`/coupons/${id}`)
    .get()
    .json()
}

const postCoupon = (body: CouponFormRequest): Promise<Coupon> => {
  return apiClient
    .url('/coupons')
    .post(body)
    .json((res) => {
      return res
    })
}

const editCoupon = (id: number, body: Partial<CouponFormRequest>): Promise<Coupon> => {
  return apiClient
    .url(`/coupons/${id}`)
    .put(body)
    .json((res) => {
      return res
    })
}

export { getCoupons, getCoupon, postCoupon, editCoupon }
