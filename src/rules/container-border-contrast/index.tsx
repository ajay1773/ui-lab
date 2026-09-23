import After from './after'
import Before from './before'
import type { Rule } from '../../types'


const containerBorderContrast: Rule = {
  id: 'container-border-contrast',
  title: 'Container Border Contrast',
  description: 'In case of ligh theme, the border color of the container should be darker then the container"s background color and the background color of the element containing the container and in case of dark theme, the border color of the container should be lighter then the container"s background color and the background color of the element containing the container',
  before: <Before />,
  after: <After />,
}

export default containerBorderContrast