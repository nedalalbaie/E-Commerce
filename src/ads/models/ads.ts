type Ad = {
  id: number
  address: string
  description: string
  show: boolean
  start_date: Date
  end_date: Date
  url: string
}

type PostOrPatchAdRequest = Omit<Ad, | "id" | "url"> & {
  url: File
}

export type { Ad, PostOrPatchAdRequest }
