import { Button, UnorderedList } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { Role, User } from '../../../mongo/models/user'
import { UserItem } from './userItem'

interface Props {
  users: User[]
}

export const UsersList: React.FC<Props> = ({ users }) => {
  const [formUsers, setFormUsers] = useState(users)

  const handleSelectorChange = (id: string, value: Role) => {
    const userIndex = formUsers.findIndex((user) => user._id === id)
    const copiedUsers = [...formUsers]
    const userToUpdate = { ...copiedUsers.splice(userIndex, 1)[0] }
    userToUpdate.role = value
    copiedUsers.splice(userIndex, 0, userToUpdate)
    setFormUsers([...copiedUsers])
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  const displayUsers = formUsers.map((user) => (
    <UserItem changeHandler={handleSelectorChange} user={user} key={user._id} />
  ))

  return (
    <form onSubmit={handleSubmit}>
      <UnorderedList>{displayUsers}</UnorderedList>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
