import { Flex, Grid } from '@chakra-ui/react'
import { Card } from '../../components/Card/components/Card'

import { Header } from '../../components/Header/components/Header'
import { fakeNews } from '../../mocks/notices'

export const Home = () => {
  const news = fakeNews

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header />
      <Grid
        gridGap={6}
        gridTemplateColumns={'repeat(auto-fill, minmax(360px, 1fr))'}
      >
        {!!news.length &&
          news.map((notice, index) => <Card key={index} notice={notice} />)}
      </Grid>
    </Flex>
  )
}
