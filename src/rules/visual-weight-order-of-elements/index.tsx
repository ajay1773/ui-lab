import After from './after'
import Before from './before'
import type { Rule } from '../../types'


const visualWeightOrderOfElements: Rule = {
  id: 'visual-weight-order-of-elements',
  title: 'Visual Weight Order of Elements',
  description: 'The order of elements in a design can affect the user\'s perception of the design. The order of elements can be used to create a hierarchy of importance and to guide the user\'s eye through the design.',
  before: <Before />,
  after: <After />,
}

export default visualWeightOrderOfElements