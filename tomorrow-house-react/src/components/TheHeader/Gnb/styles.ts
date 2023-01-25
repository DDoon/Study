import styled from 'styled-components'

import { flexbox, positionCenter } from 'src/styles/utils'

export const GNB_HEIGHT_SM = `50px`
export const GNB_HEIGHT_LG = `80px`

export const StyledGnb = styled.header`
  width: 100%;
  height: ${GNB_HEIGHT_SM}
  background-color: ${({ theme }) => theme.colors.white}
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}

  .gnb-wrapper {
    ${flexbox('between')};
    position:relative;
    width:100%;
    height:${GNB_HEIGHT_SM};
  }

  .gnb-left {
    .logo {
      ${positionCenter()}
    }
    
    a {
      display:block;
    }

    svg {
      display: block;
      width: auto;
      height: 20px;
    }
  }
`
