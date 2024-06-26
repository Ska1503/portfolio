import { FC } from 'react'
import { CloseButton, Paragraph } from 'src/shared'
import { UserType } from 'src/types'
import { MdOutlineDelete } from 'react-icons/md'
import styles from './UsersList.module.css'

type Props = {
  usersList?: UserType[]
  selectedUser: UserType | null
  isOpenUsersList: boolean
  onSelectUser: (user: UserType) => Promise<void>
  onDeleteUser: (user: UserType) => Promise<void>
  onResetSelectedUser: () => void
}

export const UsersList: FC<Props> = ({
  usersList,
  selectedUser,
  isOpenUsersList,
  onSelectUser,
  onDeleteUser,
  onResetSelectedUser,
}) => {
  return (
    <ul
      className={
        isOpenUsersList
          ? `${styles.userList} ${styles.openUsersList}`
          : styles.userList
      }
    >
      {usersList?.map(user => (
        <li
          key={user?.userId}
          className={
            selectedUser === user
              ? `${styles.item} ${styles.active}`
              : styles.item
          }
        >
          <Paragraph
            className={
              selectedUser === user
                ? `${styles.userName} ${styles.disabled}`
                : styles.userName
            }
            onClick={() => onSelectUser(user)}
          >
            {user?.userName}
          </Paragraph>
          {selectedUser === user && (
            <div className={styles.controlButtons}>
              <button onClick={() => onDeleteUser(user)}>
                <MdOutlineDelete />
              </button>
              <CloseButton onClick={onResetSelectedUser} size='1.3em' />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
