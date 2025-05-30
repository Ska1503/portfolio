import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiRedux } from 'react-icons/si'
import { Paragraph } from 'src/components/shared'
import styles from './TechnologiesCard.module.css'

export const TechnologiesCard = () => {
  const technologies = [
    {
      name: 'React',
      icon: <FaReact color='#58C4DC' size='4em' />,
      id: 1,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript color='#3078C6' size='4em' />,
      id: 2,
    },
    {
      name: 'Redux',
      icon: <SiRedux color='#764ABC' size='4em' />,
      id: 3,
    },
  ]

  return (
    <ul className={styles.technologiesCardContainer}>
      {technologies.map(({ id, icon, name }) => (
        <li key={id} className={styles.card}>
          <div className={styles.cardContent}>
            <div>{icon}</div>
            <Paragraph>{name}</Paragraph>
          </div>
        </li>
      ))}
    </ul>
  )
}
