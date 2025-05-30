import { /*GIT_HUB_URL,*/ LINKEDIN_URL, TELEGRAM_URL } from 'src/constants'
import type { MySocialListType } from 'src/types'
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
// import { FaSquareGithub } from 'react-icons/fa6'

export const useMySocialList = () => {
  const socialList: MySocialListType[] = [
    {
      link: LINKEDIN_URL,
      name: 'LinkedIn',
      bgColor: '#0A65C2',
      icon: <FaLinkedin size='1.2em' />,
      id: 1,
    },
    {
      link: TELEGRAM_URL,
      name: 'Telegram',
      bgColor: '#35ACE1',
      icon: <FaTelegramPlane size='1.2em' />,
      id: 2,
    },
    /*{
      link: GIT_HUB_URL,
      name: 'GitHub',
      bgColor: '#242526',
      icon: <FaSquareGithub size='1.2em' />,
      id: 3,
    },*/
    /*{
      link: UP_WORK_URL,
      name: 'UpWork',
      bgColor: '#0F8A00',
      icon: <FaSquareUpwork size='1.2em' />,
      id: 3,
    },*/
  ]

  return { socialList }
}
