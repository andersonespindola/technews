import { Flex, Text } from '@chakra-ui/react'
import { CreateNews } from '../../../Modal/components/CreateNews'

export function Header() {
  return (
    <Flex
      justifyContent="space-between"
      width={'auto'}
      borderBottom={'2px solid #835fe6'}
    >
      <Text color="#835fe6" fontSize="2rem" fontWeight="bold" marginLeft={5}>
        Tech News
      </Text>
      <CreateNews />
    </Flex>
  )
}
