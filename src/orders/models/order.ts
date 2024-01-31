type Order = {
  id: number
  order_number: number
  total_price: number
  shipping_address: string
  status: string
  product_codes: any[]
  quantity_selected: any[]
  created_at: string
  updated_at: string
}

type PostOrderRequest = {
  shipping_address: string
  coupon_code: string
}

type PatchOrderRequest = {
  id: number
  shipping_address: string
  coupon_code: string
}

export type { Order, PostOrderRequest, PatchOrderRequest }
