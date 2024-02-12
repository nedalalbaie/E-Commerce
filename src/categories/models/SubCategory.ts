type SubCategory = {
  id: number
  name: string
  description: string
  image_path: string
  cat_id: number
}

type CreateOrPatchSubCategory = Omit<SubCategory, 'id'>

export type { SubCategory, CreateOrPatchSubCategory }
