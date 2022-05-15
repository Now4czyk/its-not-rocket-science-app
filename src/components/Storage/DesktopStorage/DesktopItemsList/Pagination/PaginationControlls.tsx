import { Flex, Select, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FIRST_PAGE } from '../../../../../utils/constants'
import { sortingType } from '../../../../../utils/types/frontendGeneral'
import { PaginationSettings } from '../../../../UI/PaginationGeneral/PaginationGeneral'

interface Props extends PaginationSettings {
  setListType: (type: sortingType) => void
  listType: sortingType
}

export const PaginationControlls: React.FC<Props> = ({
  handleOnChangeQuantity,
  maxPage,
  minPage,
  nextPage,
  previousPage,
  toDisplay,
  itemsCount,
  listType,
  setListType,
}) => {
  const rangeBeginning = previousPage * toDisplay + FIRST_PAGE - toDisplay
  let rangeEnd = previousPage * toDisplay

  if (rangeEnd > itemsCount) {
    rangeEnd = itemsCount
  }

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid #C4C4C4"
      h="45px"
      p="12px 20px"
    >
      <Flex color="#C4C4C4">
        <Flex>
          <Text w="130px">Items per page:</Text>
          <Select
            onChange={handleOnChangeQuantity}
            color="black"
            variant="flushed"
            h="25px"
            w="80px"
          >
            <option value="15">15</option>
            <option value="45">45</option>
            <option value="117">117</option>
          </Select>
        </Flex>
        <Text m="0 40px">
          {rangeBeginning} - {rangeEnd} of {itemsCount}
        </Text>
        <Flex fontSize="20px" w="120px" justifyContent="space-around">
          <Link href={{ query: { page: minPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToLeft}
            />
          </Link>
          <Link href={{ query: { page: previousPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowBack}
            />
          </Link>

          <Link href={{ query: { page: nextPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowForward}
            />
          </Link>

          <Link href={{ query: { page: maxPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToRight}
            />
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <Icon
          cursor="pointer"
          color={listType === 'grid' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          mr="10px"
          onClick={() => {
            setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          cursor="pointer"
          color={listType === 'list' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          onClick={() => {
            setListType('list')
          }}
          as={FaThList}
        />
      </Flex>
    </Flex>
  )
}