import styled from 'styled-components'
import type { AvatarSize } from './Avatar'

interface StyledAvatarProps {
  size: AvatarSize
}

export const StyledAvatar = styled.div<StyledAvatarProps>`
  dislay: block;
  width: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  height: ${({ size }) => (size === 'small' ? '24px' : '32px')};
  overflow:hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  
  img {
    display: block;
    width:100%:
    height:100%;
    object-fit:cover;
  }
`
