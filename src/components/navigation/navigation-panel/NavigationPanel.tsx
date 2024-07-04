import type { FC } from 'react'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { FaReact } from 'react-icons/fa'
import { BurgerButton, Toolbar } from 'src/shared'
import styles from './NavigationPanel.module.css'

type Props = {
  onClickItemMenu: (id: number) => void
  handleMenu: () => void
  scrollToTop: () => void
  isShowSideBarMenu: boolean
  isActiveItem: number
}

export const NavigationPanel: FC<Props> = ({
  onClickItemMenu,
  isActiveItem,
  handleMenu,
  scrollToTop,
}) => {
  return (
    <div className={styles.navContent}>
      <div className={styles.logo} onClick={scrollToTop}>
        <FaReact size='1.5em' />
      </div>
      <BurgerButton onClick={handleMenu} />
      <NavListItemDesktop
        onChangeItem={onClickItemMenu}
        isActiveItem={isActiveItem}
      />
      <div className={styles.navToolbar}>
        <Toolbar />
      </div>
    </div>
  )
}
