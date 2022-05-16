import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header/components/Header'
import { fakeNews } from '../../mocks/notices'

export const Notice = () => {
  const { id } = useParams() as { id: string }

  const news = fakeNews.find(notice => notice.id === +id)

  if (!news?.content) return null

  return (
    <Flex width="100%" height="100%" flexDirection="column">
      <Header hasCreateNews={false} />
      <Flex width="100%" height="100%" flexDirection="column" padding={20}>
        <Text color={'white'}>{news.content}</Text>
      </Flex>
    </Flex>
  )
}
