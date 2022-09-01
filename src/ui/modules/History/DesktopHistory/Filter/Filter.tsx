import { Button, Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useColors } from 'ui/theme'
import { validateSortParam } from '../../../../../utils/dataValidation/validateSortParam'
import { useFilters } from '../../../../../utils/effects/useFilters'
import queryString from 'query-string'
import { SortType } from '../../../../../services/itemsService'

export const Filter = () => {
  const colors = useColors()
  const { handleSubmit, customQuery, setCustomQuery } = useFilters([
    'from',
    'to',
  ])

  const router = useRouter()
  const query = queryString.parseUrl(router.asPath).query

  let sort: SortType

  if (!validateSortParam(query.sort as string | undefined)) {
    sort = 'newest'
  } else {
    sort = query.sort as SortType
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value !== sort) {
      router.push({ query: { ...query, sort: value } })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection="row"
        m="5px 0 10px 0"
        w="100%"
        p="15px"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Stack direction="row" alignItems="center" w="185px" mr="15px">
          <Text color={colors.fontSecondary}>od:</Text>
          <Input
            onChange={(e) => {
              const val = e.currentTarget.value
              setCustomQuery((state) => {
                const copiedState = { ...state }
                if (val && val.length !== 0) {
                  copiedState['from'] = val
                } else {
                  delete copiedState['from']
                }
                return copiedState
              })
            }}
            value={customQuery['from'] || ''}
            type="data"
            placeholder="DD.MM.RRRR"
          ></Input>
        </Stack>
        <Stack direction="row" alignItems="center" w="185px" mr="15px">
          <Text color={colors.fontSecondary}>do:</Text>
          <Input
            onChange={(e) => {
              const val = e.currentTarget.value
              setCustomQuery((state) => {
                const copiedState = { ...state }
                if (val && val.length !== 0) {
                  copiedState['to'] = val
                } else {
                  delete copiedState['to']
                }
                return copiedState
              })
            }}
            value={customQuery['to'] || ''}
            type="data"
            placeholder="DD.MM.RRRR"
          ></Input>
        </Stack>
        <Stack direction="row">
          <Text color={colors.fontSecondary}>sortuj:</Text>
          {
            // TODO: History sorting
          }
          <Select
            color={colors.fontPrimary}
            size="md"
            variant="unstyled"
            placeholder="wybierz"
            onChange={handleChange}
            defaultValue={sort}
          >
            <option value="newest">najnowsze</option>
            <option value="oldest">najstarsze</option>
          </Select>
          <Flex justifyContent="flex-end" p="25px 0 5px 0">
            <Button
              type="submit"
              w="120px"
              h="40px"
              bgColor={colors.orangePrimary}
              color="white"
            >
              Wyszukaj
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </form>
  )
}
