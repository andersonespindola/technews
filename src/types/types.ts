export type Notice = {
  id: number
  title: string
  image?: string
  content: string
  createdAt: string
}

export type NoticeForm = {
  title: string
  image?: string
  content: string
}
