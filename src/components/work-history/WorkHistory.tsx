import { withAnimationSection } from 'src/hoc'
import { useWorkList } from 'src/hooks'
import { SectionWithTimeline } from '../section-with-timeline'

const WorkHistorySection = () => {
  const { workList } = useWorkList()
  const f = 'd'
  return (
    <SectionWithTimeline
      title='workHistory.TITLE'
      subTitle='workHistory.SUBTITLE'
      list={workList}
      isActiveDot
    />
  )
}

export const WorkHistory = withAnimationSection(WorkHistorySection)
