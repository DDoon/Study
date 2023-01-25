import { Link } from 'react-router-dom'
import { StyledAvatar } from '../Avatar/styles'

export type AvatarSize = 'big' | 'small'

export interface AvatarProps {
  username: string
  className: string
  to?: string
  image?: string
  size?: AvatarSize
}

export const Avatar: React.FC<AvatarProps> = ({
  username,
  className,
  to,
  image = '',
  size = 'small',
}) => {
  const alt = `${username}님`

  if (to != null) {
    if (!image)
      return (
        <StyledAvatar
          className={className}
          as={Link}
          to={to}
          size={size}
          aria-label={alt}
        />
      )

    return (
      <StyledAvatar className={className} as={Link} to={to} size={size}>
        <img src={image} alt={alt} />
      </StyledAvatar>
    )
  }

  if (!image)
    return <StyledAvatar className={className} size={size} aria-label={alt} />

  return (
    <StyledAvatar className={className} size={size}>
      <img src={image} alt={alt} />
    </StyledAvatar>
  )
}
