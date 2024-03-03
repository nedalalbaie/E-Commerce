type Ad = {
  id: number
  name: string
  show: 0 | 1
  start_date: Date
  end_date: Date
  url: string
}

type PostOrPatchAdRequest = Omit<Ad, 'id' | 'url'> & {
  url: File
}

export type { Ad, PostOrPatchAdRequest }
