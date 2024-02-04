type Ad = {
  id: number
  address: string
  description: string
  show: boolean
  start_date: string
  end_date: string
  url: File
}

type PostAdRequest = {}

type PatchAdRequest = {}

export type { Ad, PostAdRequest, PatchAdRequest }
