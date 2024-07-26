import { FC } from 'react'
import styles from './Information.module.css'
import { AboutType, PortfolioListType } from 'src/types'
import { Title } from 'src/shared'
import { TextContent } from '../text-content/TextContent'
import { Content } from '../content/Content'

type Props = {
  aboutProject?: AboutType[]
  project?: PortfolioListType | null
}

export const Information: FC<Props> = ({ aboutProject, project }) => {
  return (
    <div className={styles.informationContainer}>
      <Content title='Introduction'>
        <ul className={styles.informationText}>
          {aboutProject?.map((item, i) => (
            <TextContent key={i} text={item?.paragraphFirst} />
          ))}

          <div className={styles.contentImg}>
            <img src={project?.srcPageFirst} alt='project picture' />
          </div>
        </ul>
      </Content>

      <div className={styles.content}>
        <Title className={styles.informationTitle} tag='h3'>
          <span>02</span> What I did
        </Title>
        <ul className={styles.informationText}>
          {aboutProject?.map((item, i) => (
            <TextContent key={i} text={item?.paragraphSecond} />
          ))}

          <div className={styles.contentImg}>
            <img src={project?.srcPageSecond} alt='project picture' />
          </div>
        </ul>
      </div>

      <div className={styles.content}>
        <Title className={styles.informationTitle} tag='h3'>
          <span>03</span> Conclusion
        </Title>
        <ul className={styles.informationText}>
          {aboutProject?.map((item, i) => (
            <TextContent key={i} text={item?.paragraphThird} />
          ))}
        </ul>
      </div>
    </div>
  )
}
