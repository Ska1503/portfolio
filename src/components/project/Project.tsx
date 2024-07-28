import { useGetProjectById, useNavigateTo, usePortfolioList } from 'src/hooks'
import { useParams } from 'react-router-dom'
import { Head } from './head/Head'
import { Content } from './content/Content'
import { useTranslation } from 'react-i18next'
import { HiMiniArrowLongRight, HiMiniArrowLongLeft } from 'react-icons/hi2'
import {
  Section,
  PageWrapper,
  BrowserTabTitle,
  StackList,
  ButtonWithIcon,
} from 'src/shared'
import { ROUTES } from 'src/constants'
import { classNames } from 'src/utils'
import styles from './Project.module.css'

export const Project = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { project: data } = useGetProjectById(+id!)
  const { portfolioList } = usePortfolioList()
  const { navigateTo } = useNavigateTo()

  const lastProjectId = Math.max(...portfolioList.map(project => project.id))
  const currentProjectId = Number(id)

  const onTogglePage = (direction: string) => {
    const newProjectId =
      direction === 'back' ? currentProjectId - 1 : currentProjectId + 1

    navigateTo(ROUTES.dynamic.projectId(newProjectId))
  }

  const buttonsConfig = [
    {
      condition: currentProjectId !== 1,
      icon: <HiMiniArrowLongLeft />,
      direction: 'back',
    },
    {
      condition: currentProjectId < lastProjectId,
      icon: <HiMiniArrowLongRight />,
      direction: 'forward',
    },
  ]

  return (
    <Section style={{ margin: 0 }}>
      <PageWrapper>
        <Head
          projectTitle={data?.project}
          imgSrc={data?.src}
          goBack={() => navigateTo(ROUTES.main)}
        />
        <Content aboutProject={data?.about} project={data} />
        <ul className={styles.stack}>
          {data?.about?.map((item, i) => (
            <StackList key={i} stackList={item?.stack} />
          ))}
        </ul>
        <div className={styles.arrowButtonsWrap}>
          {buttonsConfig.map(({ direction, icon, condition }) => (
            <div
              key={direction}
              className={classNames(
                styles.arrowButton,
                condition && styles.visible,
              )}
            >
              {condition && (
                <ButtonWithIcon
                  icon={icon}
                  onClick={() => onTogglePage(direction)}
                />
              )}
            </div>
          ))}
        </div>
      </PageWrapper>
      <BrowserTabTitle
        title={`${t('pages.project.MY_PROJECT')} | ${data?.project!}`}
      />
    </Section>
  )
}
