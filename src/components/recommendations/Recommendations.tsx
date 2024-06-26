import { motionSection } from 'src/constants'
import { recommendations } from 'src/db'
import { MSection, SectionHead, Slider } from 'src/shared'
import { RecommedCard } from './card/RecommendCard'
import { useTranslation } from 'react-i18next'

export const Recommendations = () => {
  const { t } = useTranslation()

  return (
    <MSection
      id='recommendations'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
      viewport={motionSection.viewport}
    >
      <SectionHead
        title={t('recommendations.TITLE')}
        subTitle={t('recommendations.SUBTITLE')}
      />
      <div style={{ width: '100%' }}>
        <Slider>
          {recommendations.map(({ title, user, comment, rating, id }) => (
            <RecommedCard
              key={id}
              title={title}
              user={user}
              comment={comment}
              rating={rating}
            />
          ))}
        </Slider>
      </div>
    </MSection>
  )
}
