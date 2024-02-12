type Product = {
  id: string
  name: string
  description: string
  inventory_level: number
  image1_path: File
  image2_path: File
  image3_path: File
  image4_path: File
  price: number
  sub_category_id: number
  product_code: string
  gender: number
  hex_codes: string []
}

type AddProductRequest = Omit<Product, 'id'>

export type { Product, AddProductRequest }
