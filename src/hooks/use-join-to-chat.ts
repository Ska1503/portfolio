import { useCreateUserMutation, useAuthUser } from 'src/app'
import { useForm, SubmitHandler } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

type FormUserName = {
  userName: string
}

const INITIAL_STATE: FormUserName = {
  userName: '',
}

type Props = {
  infoMessage: string
}

export const useJoinToChat = ({ infoMessage }: Props) => {
  const { setUserName, setJoinedUser, setUserId } = useAuthUser()
  const [createUser, { isLoading }] = useCreateUserMutation()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isValid },
    clearErrors,
  } = useForm<FormUserName>({
    mode: 'onBlur',
    defaultValues: INITIAL_STATE,
  })

  const handleChange =
    (field: keyof FormUserName) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setValue(field, value)
      clearErrors(field)
    }

  const onSubmit: SubmitHandler<FormUserName> = async ({
    userName,
  }: FormUserName) => {
    try {
      const createdUser = await createUser({
        userName,
        userId: uuidv4(),
      }).unwrap()
      if (createdUser) {
        setJoinedUser(true)
        setUserName(createdUser?.userName)
        setUserId(createdUser?.userId)
      }
    } catch {
      toast.info(infoMessage)
      setJoinedUser(false)
      setUserName('')
    }
  }

  const isDisabledButton = isSubmitting || !isValid || isLoading

  return {
    register,
    handleSubmit,
    handleChange,
    errors,
    isLoading,
    isDisabledButton,
    onSubmit,
  }
}
