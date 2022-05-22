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
  Input,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeleteItemPopover from '../../Popovers/DeleteItemPopover'

interface ModalEditProps extends Omit<ModalProps, 'children'> {
  name: string
  description: string
  imageUrl: string
  quantity: number
  id: string
}

const ModalEdit = (props: ModalEditProps) => {
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(props.name)
  const [description, setDescription] = useState(props.description)
  const [quantity, setQuantity] = useState(props.quantity)
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Edycja produktu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Image src={props.imageUrl} w="80px" h="80px" mr="10px" />
            <Box>
              <Input
                h="30px"
                pl="5px"
                mb="5px"
                placeholder="Wprowadź nazwę"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value)
                }}
                fontWeight="500"
                fontSize="19px"
              />
              <Flex lineHeight="30px" mt="5px">
                <Text>Ilość w magazynie:</Text>
                <NumberInput
                  display="inline"
                  h="30px"
                  w="84px"
                  ml="10px"
                  fontSize="16px"
                  borderColor="#E2E8F0"
                  defaultValue={quantity}
                  onChange={(e) => {
                    setQuantity(parseInt(e))
                  }}
                  min={1}
                >
                  <NumberInputField h="32px" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </Box>
          </Flex>
          <Flex flexDirection="column">
            <Text mt="5px">Opis:</Text>
            <Textarea
              p="5px"
              value={description}
              placeholder="Wprowadź opis"
              onChange={(e) => {
                setDescription(e.currentTarget.value)
              }}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            onClick={() => {
              setIsEdit(false)
            }}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zapisz
          </ProductButton>
          <ProductButton
            onClick={() => {
              setIsEdit(true)
            }}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zamknij
          </ProductButton>
          <DeleteItemPopover onClick={() => {}} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEdit
