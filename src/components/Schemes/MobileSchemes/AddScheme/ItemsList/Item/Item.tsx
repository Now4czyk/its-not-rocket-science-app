import React, { useContext } from 'react'
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { TmpSchemaItem } from '../../../../../../mongo/models/schema'
import { SchemasContext } from '../../../../../../pages/schemes'

interface ItemProps {
  schemaItem: TmpSchemaItem
}

const Item = ({ schemaItem }: ItemProps) => {
  const context = useContext(SchemasContext)
  const handleDelete = () => {
    context?.removeItem(schemaItem)
  }
  return (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer">
          <Text lineHeight="40px" noOfLines={1} ml="10px">
            {schemaItem.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          allowMouseWheel
          display="inline"
          h="30px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={schemaItem.neededQuantity}
          onChange={(e) => context?.updateItem({...schemaItem, neededQuantity: +e})}
          min={1}
        >
          <NumberInputField px="5px" h="30px" />
          <NumberInputStepper h="30px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">
          <AiOutlineClose
            cursor="pointer"
            display="block"
            onClick={handleDelete}
          />
        </Flex>
      </Td>
    </Tr>
  )
}

export default Item
