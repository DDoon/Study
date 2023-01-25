import { css, TypograpyhScale } from 'styled-components'
import { theme } from '../index'

export function textStyle(size: TypograpyhScale) {
  return css`
    font-size: ${theme.fontSizes[size]};
    line-height: ${theme.fontSizes[size]};
    letter-spacing: ${theme.fontSizes[size]};
  `
}

export function truncate() {
  return css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `
}

export function lineClamp(line: number) {
  return css`
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `
}
