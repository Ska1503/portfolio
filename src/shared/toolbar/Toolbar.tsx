import { useContext } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'
import { ThemeContext } from 'src/providers'
import { DARK, ENG, LANG, LIGHT } from 'src/constants'
import { useTranslation } from 'react-i18next'
import styles from './Toolbar.module.css'

export const Toolbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language

  const themeButtons = [
    {
      id: 1,
      icon: <BsSun size='0.9em' />,
      value: LIGHT,
    },
    {
      id: 2,
      icon: <BsMoon size='0.9em' />,
      value: DARK,
    },
  ]

  const onChangeTheme = () => changeTheme(theme === LIGHT ? DARK : LIGHT)
  const onChangeLanguage = (language: string) => i18n.changeLanguage(language)

  return (
    <div role='radiogroup' className={styles.toolbarContainer}>
      {themeButtons.map(({ id, icon, value }) => (
        <button
          key={id}
          className={
            value === theme
              ? `${styles.toolbarSwitch} ${styles.disabled}`
              : styles.toolbarSwitch
          }
          value={value}
          role='radio'
          disabled={value === theme}
          onClick={onChangeTheme}
        >
          {icon}
        </button>
      ))}

      {currentLanguage === ENG ? (
        <button
          key={LANG[1].id}
          className={styles.toolbarSwitch}
          value={LANG[1].value}
          onClick={() => onChangeLanguage(LANG[1].value)}
        >
          {LANG[1].label}
        </button>
      ) : (
        <button
          key={LANG[0].id}
          className={styles.toolbarSwitch}
          value={LANG[0].value}
          onClick={() => onChangeLanguage(LANG[0].value)}
        >
          {LANG[0].label}
        </button>
      )}
    </div>
  )
}