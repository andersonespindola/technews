import axios from 'axios'
import { ReactNode, useState, createContext } from 'react'
import { URL } from '../../hooks/useNews'
import { Notice } from '../../types/types'

/**
 * Type definitions.
 */
type Props = {
  children: ReactNode
}

type Context = {
  fetchData: () => void
  news: Notice[]
  setNewsValue: (query: Notice[]) => void
}

/**
 * Context.
 */
export const NewsContext = createContext<Context>({
  fetchData: () => {},
  news: [],
  setNewsValue: () => {}
})

/**
 * Component.
 */
export function Context({ children }: Props) {
  /**
   * States.
   */
  const [news, setNews] = useState<Notice[]>([])

  /**
   * Component functions.
   */
  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/`)
      setNews(response.data)
    } catch (error) {
      console.log({ error })
    }
  }

  const setNewsValue = (news: Notice[]) => {
    setNews(news)
  }

  return (
    <NewsContext.Provider
      value={{
        news,
        fetchData,
        setNewsValue
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
