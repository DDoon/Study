import 'styled-components'

declare module 'styled-components' {
  export type TypograpyhScale = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg'

  export interface DefaultTheme {
    breakpoints: {
      tablet: string
      desktop: string
    }

    fontFamilies: {
      main: string
      price: string
    }
    fontSizes: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }

    lineHeights: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }

    letterSpacings: {
      xxs: string
      xs: string
      sm: string
      base: string
      md: string
      lg: string
    }

    colors: {
      black: string
      dark: string
      primary: string
      secondary: string
      tertiary: string
      border: string
      background: string
      white: string
      blue: string
      blueDark: string
      blueLight: string
      red: string
      green: string
    }

    levels: {
      [key: string]: number
    }

    boxShadows: {
      dropdown: string
      popup: string
      popupReversed: string
    }

    gutter: string
  }
}
