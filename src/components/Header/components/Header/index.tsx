import { Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { CreateNews } from '../../../Modal/components/CreateNews'

type HeaderProps = {
  hasCreateNews?: boolean
}

export function Header({ hasCreateNews = true }: HeaderProps) {
  const navigate = useNavigate()

  return (
    <Flex
      justifyContent="space-between"
      width={'auto'}
      borderBottom={'2px solid #835fe6'}
    >
      <Text
        color="#835fe6"
        fontSize="2rem"
        fontWeight="bold"
        marginLeft={5}
        cursor={'pointer'}
        onClick={() => navigate(`/`)}
      >
        Tech News
      </Text>
      {hasCreateNews && <CreateNews />}
    </Flex>
  )
}
