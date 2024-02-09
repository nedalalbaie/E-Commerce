type Discount = {
  id: number
  code: string
  discount_type: 'percentage' | 'fixed'
  amount: number
  start_date: Date
  end_date: Date
}

type DiscountFormRequest = Omit<Discount, 'id'>

export type { Discount, DiscountFormRequest }
