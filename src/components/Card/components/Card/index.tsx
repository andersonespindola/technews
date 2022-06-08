import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Spacer,
  Stack,
  Text
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useNews } from '../../../../hooks/useNews'
import { Notice } from '../../../../types/types'
import { getUtcDate } from '../../../../utils/date'

type CardProps = {
  notice: Notice
}

export function Card({ notice }: CardProps) {
  const { createdAt, image, title } = notice

  /**
   * Hooks.
   */
  const navigate = useNavigate()
  const { deleteNews } = useNews()

  return (
    <Center py={12}>
      <Box display={'inline-block'} float={'left'} position={'relative'}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'lg'}
          backgroundColor={'#1c1f26'}
          pos={'relative'}
          zIndex={1}
          border={'1px solid #835fe6'}
          cursor={'pointer'}
          _hover={{
            boxShadow: '5px 5px 5px #835fe6',
            zIndex: 2,
            transform: 'translateY(-2px)',
            transition: 'all 0.2s ease-in-out'
          }}
          onClick={() => navigate(`/${notice.id}`)}
        >
          <Box
            rounded={'lg'}
            pos={'relative'}
            height={'230px'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)'
              }
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={
                image ||
                'https://via.placeholder.com/1280x720.png?text=Sem+imagem'
              }
            />
          </Box>
          <Stack pt={10} align={'center'} backgroundColor={'#1c1f26'}>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
              color={'gray.500'}
              backgroundColor={'#1c1f26'}
            >
              {title}
            </Heading>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              backgroundColor={'#1c1f26'}
            >
              {getUtcDate(createdAt)}
            </Text>
            <Spacer />
          </Stack>
        </Box>
        <Button
          borderRadius={50}
          position={'absolute'}
          top={0}
          right={0}
          margin={'-10px -10px 0 0'}
          zIndex={5}
          color={'white'}
          backgroundColor={'#835fe6'}
          size={'sm'}
          _hover={{
            backgroundColor: '#d94839'
          }}
          onClick={() => deleteNews(notice.id)}
        >
          X
        </Button>
      </Box>
    </Center>
  )
}
