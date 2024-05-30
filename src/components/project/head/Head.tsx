import type { FC } from 'react'
import { BackButton, Title } from 'src/shared'
import styles from './Head.module.css'

type Props = {
  onClick: () => void
  projectTitle?: string
  imgSrc?: string
}

export const Head: FC<Props> = ({ onClick, projectTitle, imgSrc }) => {
  return (
    <>
      <div className={styles.title}>
        <BackButton onClick={onClick} />
        <Title style={{ margin: 0 }} tag='h2'>
          {projectTitle}
        </Title>
      </div>
      <div className={styles.headImg}>
        <img src={imgSrc} alt={`${projectTitle}-project`} />
      </div>
    </>
  )
}
