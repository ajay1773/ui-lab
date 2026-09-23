import After from './after'
import Before from './before'
import type { Rule } from '../../types'


const saturateTheNeutrals: Rule = {
  id: 'saturate-the-neutrals',
  title: 'Saturate the Neutrals',
  description: 'If you have neutrals being used in your design, you can saturate them to make the UI feel more coherent with the accent colors',
  before: <Before />,
  after: <After />,
}

export default saturateTheNeutrals