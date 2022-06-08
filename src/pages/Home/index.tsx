import { Flex, Grid, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Card } from '../../components/Card/components/Card'

import { Header } from '../../components/Header/components/Header'
import { useNews } from '../../hooks/useNews'

export const Home = () => {
  const { news, fetchData } = useNews()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header />
      {!news.length ? (
        <Flex width="100%" height="100%" flexDirection="column" padding={20}>
          <Text color={'white'}>Não foi encontrado nenhuma notícia</Text>
        </Flex>
      ) : (
        <Grid
          gridGap={6}
          gridTemplateColumns={'repeat(auto-fill, minmax(360px, 1fr))'}
        >
          {news.map((notice, index) => (
            <Card key={index} notice={notice} />
          ))}
        </Grid>
      )}
    </Flex>
  )
}
