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
  image1_path: File
  image2_path: File
  image3_path: File
  image4_path: File
}

type AddProductRequest = Omit<Product, 'id' | 'inventory_level' >

export type { Product, AddProductRequest }