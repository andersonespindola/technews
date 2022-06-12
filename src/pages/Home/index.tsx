import { Flex } from '@chakra-ui/react'
import { Context } from '../../components/Context'

import { Header } from '../../components/Header/components/Header'
import { NewsList } from '../../components/List/components/List'

export const Home = () => {
  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Context>
        <Header />
        <NewsList />
      </Context>
    </Flex>
  )
}
