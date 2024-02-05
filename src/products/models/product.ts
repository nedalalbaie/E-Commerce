type Product = {
  id: string
  name: string
  product_code: string
  description: string
  price: number
  sub_category_id: number
  gender: number
  inventory_level: number
  image1_path: File
  image2_path: File
  image3_path: File
  image4_path: File
  hex_codes: string []
}

type AddProductRequest = Omit<Product, 'id'>

export type { Product, AddProductRequest }
