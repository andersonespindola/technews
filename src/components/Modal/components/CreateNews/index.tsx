import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react'
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { CustomButton } from './styles'
import './styles.css'
import { useNews } from '../../../../hooks/useNews'

export function CreateNews() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const [disabled, setDisabled] = useState(true)

  const { createNews } = useNews()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = async () => {
    if (!title || !content) {
      return console.log('Preencha os campos obrigatórios')
    }

    await createNews({ title, content, image })

    setTitle('')
    setImage('')
    setContent('')
    onClose()
  }

  const handleChangeTitle = (value: string) => {
    setTitle(value)
  }

  const handleChangeContent = (value: string) => {
    setContent(value)
  }

  useEffect(() => {
    setDisabled(!content || !title)
  }, [content, title])

  return (
    <>
      <CustomButton onClick={onOpen}>Criar notícia</CustomButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crie sua notícia</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Título</FormLabel>
              <Input
                value={title}
                onChange={event => handleChangeTitle(event.target.value)}
                placeholder="Título..."
                isRequired
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Imagem</FormLabel>
              <Input
                value={image}
                onChange={event => setImage(event.target.value)}
                placeholder="Coloque a url da imagem..."
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Conteúdo</FormLabel>

              <CKEditor
                editor={ClassicEditor}
                data="<p>Digite sua notícia aqui</p>"
                // @ts-ignore
                onChange={(_, editor) => {
                  const data = editor.getData()
                  console.log({ data })
                  handleChangeContent(data)
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
              disabled={disabled}
            >
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
