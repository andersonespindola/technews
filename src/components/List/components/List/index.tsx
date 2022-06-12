import { Flex, Grid, Text } from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { Card } from '../../../Card/components/Card'
import { NewsContext } from '../../../Context'

export function NewsList() {
  /**
   * Context.
   */
  const { news, fetchData } = useContext(NewsContext)

  useEffect(() => {
    fetchData()
  }, [])

  return !news.length ? (
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
  )
}
