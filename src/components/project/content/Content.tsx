import type { FC, ReactNode } from 'react'
import { TextContent } from '../text-content/TextContent'
import { AboutType, PortfolioListType } from 'src/types'
import { Title } from 'src/shared'
import styles from './Content.module.css'

type Props = {
  title: string
  children: ReactNode
  imgSrc?: string
}

export const Content: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.content}>
      <Title className={styles.informationTitle} tag='h3'>
        <span>01</span> {title}
      </Title>
      {children}
    </div>
  )
}
