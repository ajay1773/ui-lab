import After from './after'
import Before from './before'
import type { Rule } from '../../types'


const lineHeightLetterSpacingInverslyPropotionalFontSize: Rule = {
  id: 'line-height-letter-spacing-inversly-propotional-font-size',
  title: 'Line Height Letter Spacing Inversly Propotional Font Size',
  description: 'Line height and letter spacing should be inversly proportional to the font size. This makes the text more readable and easy to understand.',
  before: <Before />,
  after: <After />,
}

export default lineHeightLetterSpacingInverslyPropotionalFontSize