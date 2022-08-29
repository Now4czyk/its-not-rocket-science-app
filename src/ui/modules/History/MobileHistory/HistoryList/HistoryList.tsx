import { Flex } from '@chakra-ui/react'
import { HistoryListItem } from '../HistoryListItem'
import React, { memo } from 'react'

export const HistoryList = memo(() => {
  return (
    <Flex
      flexDir="column"
      w="95%"
      mt="10px"
      mb="20px"
      mx="auto"
      justifyContent="center"
    >
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
      <HistoryListItem />
    </Flex>
  )
})
