import { useMemo } from 'react'
import { ASX_URL, MAVEN_URL, TUTTIFY_URL } from '../constants'
import {
  asx,
  asxPageFirst,
  asxPageSecond,
  maven,
  mavenPageRirst,
  mavenPageSecond,
  tutiffy,
  tutiffyPageRirst,
  tutiffyPageSecond,
} from '../assets'
import { useTranslation } from 'react-i18next'
import { PortfolioListType } from '../types'

export const usePortfolioList = () => {
  const { t } = useTranslation()
  const portfolioList: PortfolioListType[] = [
    {
      id: 1,
      link: TUTTIFY_URL,
      srcPageFirst: tutiffyPageRirst,
      srcPageSecond: tutiffyPageSecond,
      src: tutiffy,
      project: t('portfolio.projects.tutiffy.NAME'),
      title: t('portfolio.projects.tutiffy.DESCR'),
      description: t('portfolio.projects.tutiffy.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.tutiffy.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.tutiffy.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.tutiffy.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.tutiffy.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.tutiffy.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.tutiffy.about.p_2.TEXT_3'),
          },
          paragraphThird: {
            textThree: t('portfolio.projects.tutiffy.about.p_2.TEXT_3'),
          },
          stack:
            '#React #TypeScript #Redux Toolkit #RTK Query #Apollo GraphQL #i18next #Material UI',
        },
      ],
    },
    {
      id: 2,
      link: ASX_URL,
      srcPageFirst: asxPageFirst,
      srcPageSecond: asxPageSecond,
      src: asx,
      project: t('portfolio.projects.ASX.NAME'),
      title: t('portfolio.projects.ASX.DESCR'),
      description: t('portfolio.projects.ASX.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.ASX.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.ASX.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_2.TEXT_2'),
          },
          paragraphThird: {
            textThree: t('portfolio.projects.ASX.about.p_2.TEXT_3'),
          },
          stack:
            '#Next #TypeScript #Redux Toolkit #RTK Query #Express #Stripe #SamSub #Keycloack #Radix UI',
        },
      ],
    },
    {
      id: 3,
      link: MAVEN_URL,
      srcPageFirst: mavenPageRirst,
      srcPageSecond: mavenPageSecond,
      src: maven,
      project: t('portfolio.projects.maven.NAME'),
      title: t('portfolio.projects.maven.DESCR'),
      description: t('portfolio.projects.maven.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.maven.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.maven.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.maven.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_2.TEXT_2'),
          },
          paragraphThird: {
            textThree: t('portfolio.projects.maven.about.p_2.TEXT_3'),
          },
          stack: '#HTML #JavaScript #SCSS #GSAP #Gulp',
        },
      ],
    },
  ]

  return { portfolioList }
}
