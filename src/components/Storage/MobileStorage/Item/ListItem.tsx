import {
  Box,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  ButtonGroup,
} from '@chakra-ui/react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import { useState } from 'react'

interface Props {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Flex
      w="95%"
      m="0 auto"
      justifyContent="flex-start"
      borderBottom="2px solid #D5D5D5"
    >
      <Flex m="auto 0 auto 10px">
        <Image
          src={item.imageUrl}
          minH="100px"
          minW="100px"
          w="100px"
          h="100px"
        />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" fontWeight="500">
          {item.name}
        </Text>
        <Text fontSize="12px" color="#878585">
          {item.description}
        </Text>
        <Text fontSize="16px">Ilość: 58</Text>
        <Flex flexDirection="row" mt="5px">
          <Flex justifyContent="flex-end">
            {!isEdit ? (
              <ProductButton
                w="80px"
                onClick={() => {
                  setIsEdit(true)
                }}
                fontSize="16px"
                mr="5px"
              >
                Edytuj
              </ProductButton>
            ) : (
              <>
                <NumberInput
                  h="32px"
                  w="70px"
                  borderColor="#E2E8F0"
                  defaultValue={1}
                  min={1}
                >
                  <NumberInputField h="32px" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <ButtonGroup isAttached mx="5px">
                  <ProductButton
                    size="sm"
                    pb="5px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    +
                  </ProductButton>
                  <ProductButton
                    size="sm"
                    pb="5px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    -
                  </ProductButton>
                </ButtonGroup>
              </>
            )}
            <ProductButton w="120px" onClick={() => {}} fontSize="16px">
              Dodaj do listy
            </ProductButton>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}

export default ListItem
