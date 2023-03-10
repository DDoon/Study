import { media, stripPx } from 'src/styles/utils'
import {
  LNB_HEIGHT_SM,
  LNB_HEIGHT_LG,
} from 'src/components/TheHeader/Lnb/styles'
import {
  GNB_HEIGHT_SM,
  GNB_HEIGHT_LG,
} from 'src/components/TheHeader/Gnb/styles'
import styled from 'styled-components'

export const StyledTheHeader = styled.header`
  width: 100%:
  height:${stripPx(GNB_HEIGHT_SM) + stripPx(LNB_HEIGHT_SM)}px;

  &.fixed {
    .gnb,
    .lnb {
      position: fixed;
      transition: top 200ms;
    }
  }

  &.scrollDown {
    .gnb {
      top: -${GNB_HEIGHT_SM};
    }

    .lnb {
      top: -${LNB_HEIGHT_SM};
    }
  }

  &.scrollUp {
    .gnb {
      position: fixed;
      top: 0;
    }

    .lnb {
      position: relative;
      top: 0;
    }
  }

  .gnb-layout,
  .lnb-layout,
  .gnb,
  .lnb {
    width: 100%;
  }

  .gnb-layout {
    height: ${GNB_HEIGHT_SM};
  }

  .lnb-layout {
    height: ${LNB_HEIGHT_SM};
  }

  .gnb {
    z-index: ${({ theme }) => theme.levels.gnb};
    transition: top 200ms;
  }

  .lnb {
    z-index: ${({ theme }) => theme.levels.lnb};
  }

  ${media.greaterThan('tablet')`
    height: ${stripPx(GNB_HEIGHT_LG) + stripPx(LNB_HEIGHT_LG)}px;

    .gnb {
      position: fixed;
      top: 0 !important;
    }

    &.scrollDown {
      .gnb {
        top: -${GNB_HEIGHT_LG};
      }

      .lnb {
        top: -${GNB_HEIGHT_LG};
      }
    }

    &.scrollUp {
      .lnb {
        postion: fixed;
        top: ${LNB_HEIGHT_LG};
      }
    }

    .gnb-layout {
      height: ${GNB_HEIGHT_LG};
    }

    .lnb-layout {
      height: ${LNB_HEIGHT_LG};
    }
  `}
`
