import axios from 'axios'
import { useState } from 'react'
import { Notice, NoticeForm } from '../types/types'

const URL = 'https://technews-backend.herokuapp.com'

export const useNews = () => {
  const [news, setNews] = useState<Notice[]>([])
  const [foundNew, setFoundNew] = useState<Notice>()

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/`)
      setNews(response.data)
    } catch (error) {
      console.log({ error })
    }
  }

  const getNewsById = async (id: number | string) => {
    try {
      const response = await axios.get(`${URL}/${id}`)
      setFoundNew(response.data)
    } catch (error) {
      console.log({ error })
    }
  }

  const createNews = async (notice: NoticeForm) => {
    try {
      await axios.post(`${URL}/`, notice)
      await fetchData()
    } catch (error) {
      console.log({ error })
    }
  }

  const deleteNews = async (id: number | string) => {
    try {
      await axios.delete(`${URL}/${id}`)
      await fetchData()
    } catch (error) {
      console.log({ error })
    }
  }

  return { news, getNewsById, createNews, foundNew, deleteNews, fetchData }
}
