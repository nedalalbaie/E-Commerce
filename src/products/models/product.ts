type Product = {
  id: string
  name: string
  product_code: string
  description: string
  category_id: number
  price: number
  quantity: number
  gender: number
  inventory_level: number
  image1_path: string
  image2_path: string
  image3_path: string
  image4_path: string
}

type AddProductRequest = Omit<Product, 'id' | 'inventory_level' >

export type { Product, AddProductRequest }