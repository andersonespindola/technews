import axios from 'axios'
import { useContext, useState } from 'react'
import { NewsContext } from '../components/Context'
import { Notice, NoticeForm } from '../types/types'

export const URL = 'https://technews-backend.herokuapp.com'
// export const URL = 'http://localhost:8080'

export const useNews = () => {
  const [foundNew, setFoundNew] = useState<Notice>()

  const { fetchData } = useContext(NewsContext)

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

  return { getNewsById, createNews, foundNew, deleteNews }
}
