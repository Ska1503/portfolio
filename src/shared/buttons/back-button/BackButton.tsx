import type { FC } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { ButtonWithIcon } from '..'

type Props = {
  onClick: () => void
}

export const BackButton: FC<Props> = ({ onClick }) => {
  return (
    <ButtonWithIcon onClick={onClick}>
      <IoIosArrowBack size={'1.5em'} />
    </ButtonWithIcon>
  )
}
