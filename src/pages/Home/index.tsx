import { Flex, Grid } from '@chakra-ui/react'
import { Card } from '../../components/Card/components/Card'

import { Header } from '../../components/Header/components/Header'

export const Home = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header />
      <Grid templateColumns="repeat(4, 1fr)">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Flex>
  )
}
