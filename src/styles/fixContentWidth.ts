import { css } from 'styled-components'

const fixContentWidth = (maxWidth?: React.CSSProperties['width']) => css`
  max-width: ${maxWidth || 'var(--contentMaxWidth)'};
  margin-left: auto;
  margin-right: auto;
`

export default fixContentWidth
