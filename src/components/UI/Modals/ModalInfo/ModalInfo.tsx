import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Image,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'

interface ModalEditProps extends Omit<ModalProps, 'children'> {
  name: string
  description: string
  imageUrl: string
  quantity: number
  id: string
}

const ModalEdit = (props: ModalEditProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Informacje o produkcie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Image src={props.imageUrl} w="80px" h="80px" mr="10px" />
            <Box>
              <Text fontWeight="500" fontSize="19px">
                {props.name}
              </Text>
              <Text>Ilość: {props.quantity}</Text>
            </Box>
          </Flex>
          <Text mt="5px">
            Opis:
            <br /> {props.description}
          </Text>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            fontSize="16px"
            colorScheme="blue"
            ml="10px"
            w="80px"
            onClick={props.onClose}
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEdit