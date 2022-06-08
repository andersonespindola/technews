import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header/components/Header'
import { useNews } from '../../hooks/useNews'

export const Notice = () => {
  const { id } = useParams() as { id: string }

  const { getNewsById, foundNew } = useNews()

  getNewsById(id)

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header hasCreateNews={false} />
      <Flex width="100%" height="100%" flexDirection="column" padding={20}>
        <Text color={'white'}>
          {!foundNew?.content ? 'Carregando...' : foundNew.content}
        </Text>
      </Flex>
    </Flex>
  )
}
