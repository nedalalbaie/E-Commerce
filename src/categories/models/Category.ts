type Category = {
  id: number
  name: string
  description: string
  image_path: string
  created_at: string
  updated_at: string
}

type AddCategoryRequest = {
  name: string
  description: string
  image_path: File
}

type EditCategoryRequest = Partial<{
  id: number
  name: string
  description: string
  image_path: string
}>

export type { Category, AddCategoryRequest, EditCategoryRequest }
