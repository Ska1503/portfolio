import type { FC } from 'react'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { Toolbar } from '../toolbar/Toolbar'
import { PiDevToLogoFill } from 'react-icons/pi'
import { MdMenu, MdOutlineInfo } from 'react-icons/md'
import { ButtonWithIcon } from 'src/shared'
import styles from './NavigationPanel.module.css'

type Props = {
  onClickItemMenu: (id: number) => void
  handleMenu: () => void
  handleSkills: () => void
  isShowSideBarMenu: boolean
  isActiveItem: number
}

export const NavigationPanel: FC<Props> = ({
  onClickItemMenu,
  isActiveItem,
  handleSkills,
  handleMenu,
}) => {
  return (
    <div className={styles.navContent}>
      <ButtonWithIcon onClick={handleSkills}>
        <MdOutlineInfo size='1.5em' />
      </ButtonWithIcon>
      <div className={styles.logo}>
        <PiDevToLogoFill size='1.5em' />
      </div>
      <ButtonWithIcon className={styles.burgerButton} onClick={handleMenu}>
        <MdMenu size='1.5em' />
      </ButtonWithIcon>
      <NavListItemDesktop
        onChangeItem={onClickItemMenu}
        isActiveItem={isActiveItem}
      />
      <div className={styles.navToolbar}>
        <Toolbar
          uniqueIdForSwitcher='switch-theme-desk'
          uniqueToggletId='toggle-lang-desk'
        />
      </div>
    </div>
  )
}
