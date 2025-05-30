import { type FC } from 'react'
import { useMySocialList } from 'src/hooks'
import styles from './SocialList.module.css'

type Props = {
  visibleIds?: number[]
}

export const SocialList: FC<Props> = ({ visibleIds }) => {
  const { socialList } = useMySocialList()

  const filteredSocialList = visibleIds
    ? socialList.filter(item => visibleIds.includes(item.id))
    : socialList

  return (
    <address>
      <ul className={styles.socialContainer}>
        {filteredSocialList.map(({ id, icon, link, name }) => (
          <li key={id} className={styles.socialItem}>
            <a
              className={styles.link}
              target='_blank'
              href={link}
              rel='noreferrer nofollow'
              aria-label={name}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </address>
  )
}
