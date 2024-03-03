type Bill = {
  id: number
  customer_name: string
  quantity: any[]
  total_price: number
  user_id: number
  product_codes: string[]
  created_at: string
}

type CreateBill = {
  order_number: number
}

export type { Bill, CreateBill }
