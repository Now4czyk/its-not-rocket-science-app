import {
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import QuantityBadge from '../../Badges/QuantityBadge'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../Popovers/DeletePopover'

interface ModalEditSchemeProps extends Omit<ModalProps, 'children'> {
  onClose: () => void
}

const ModalEditScheme = (props: ModalEditSchemeProps) => {
  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem">
        <ModalHeader>Edycja schematu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" maxH="350px" overflowY="scroll" w="100%">
            <Text>Nazwa schematu</Text>
            <Input
              h="30px"
              pl="5px"
              mb="5px"
              placeholder="Wprowadź nazwę schematu"
              fontWeight="500"
              fontSize="19px"
            />
            <Text>Opis:</Text>
            <Textarea p="5px" placeholder="Wprowadź opis" />
            <Table>
              <Thead>
                <Tr fontSize="16px" fontWeight="700">
                  <Th w="80%">NAZWA</Th>
                  <Th w="1%" minW="120px" textAlign="right">
                    ILOŚĆ SZTUK
                  </Th>
                  <Th w="18%" textAlign="right">
                    DOSTĘPNOŚĆ
                  </Th>
                  <Th w="1%" textAlign="right">
                    AKCJE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* <SchemeItem /> */}
                <Tr fontSize="14px" h="40px">
                  <Td>Item 1</Td>
                  <Td w="1%" minW="120px" textAlign="right">
                    <NumberInput
                      allowMouseWheel
                      display="inline"
                      h="30px"
                      fontSize="16px"
                      borderColor="#E2E8F0"
                      min={1}
                    >
                      <NumberInputField h="30px" minW="80px" />
                      <NumberInputStepper h="30px">
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Td>
                  <Td w="18%" textAlign="right">
                    <QuantityBadge schemeQuantity={10} storageQuantity={50} />
                  </Td>
                  <Td>
                    <Flex justifyContent="flex-end">
                      <AiOutlineClose cursor="pointer" />
                    </Flex>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <ProductButton fontSize="16px" w="80px" ml="10px">
            Zapisz
          </ProductButton>
          <ProductButton
            onClick={props.onClose}
            fontSize="16px"
            w="80px"
            ml="10px"
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalEditScheme
