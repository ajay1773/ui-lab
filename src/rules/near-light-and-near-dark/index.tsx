import After from './after'
import Before from './before'
import type { Rule } from '../../types'


const nearLightAndNearDark: Rule = {
  id: 'near-light-and-near-dark',
  title: 'Near Light and Near Dark',
  description: 'Never use pure black for text or pure white for backgrounds. Reason being that these have really high contrast which can cause issues with the sight of the users to make them uncomfortable. Use near black and near white',
  before: <Before />,
  after: <After />,
}

export default nearLightAndNearDark