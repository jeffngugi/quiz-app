import {type StyleProp, TouchableOpacity, type ViewStyle} from 'react-native'
import {useCallback, useMemo} from 'react'
import {getTokens, Stack, styled, Text} from 'tamagui'

interface Props {
  onPress: () => void
  variant:
    | 'primary'
    | 'secondary'
    | 'black'
    | 'blackOnDark'
    | 'link'
    | 'hint'
    | 'redDark'
    | 'redLight'
  text?: string
  style?: StyleProp<ViewStyle>

  disabled?: boolean
  fontSize?: number
  fullWidth?: boolean
  fullSize?: boolean
  size?: 'small' | 'medium' | 'large'
  adjustTextToFitOneLine?: boolean
  numberOfLines?: number
}

const PressableStyled = styled(Stack, {
  fd: 'row',
  ai: 'center',
  jc: 'center',
  br: '$5',
  variants: {
    variant: {
      primary: {
        bg: 'pink',
      },
      secondary: {
        bg: 'yellow',
      },
      black: {
        bg: 'black',
      },
      blackOnDark: {
        bg: 'grey',
      },
      link: {
        bg: 'transparent',
        h: 'auto',
      },
      hint: {
        bc: 'pinkAccent2',
      },
      redDark: {
        bc: 'Red',
      },
      redLight: {
        bc: 'red',
      },
    },
    disabled: {
      true: {
        bg: '$grey',
      },
    },
    size: {
      small: {
        h: 38,
        px: '$3',
      },
      medium: {
        h: 48,
        px: '$4',
      },
      large: {
        h: 60,
        px: '$4',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    fullSize: {
      true: {
        flex: 1,
      },
    },
  } as const,
})

const TextStyled = styled(Text, {
  variants: {
    variant: {
      primary: {
        col: 'green',
      },
      secondary: {
        col: '$darkBrown',
      },
      black: {
        col: '$white',
      },
      blackOnDark: {
        col: '$greyOnBlack',
      },
      link: {
        col: '$white',
      },
      hint: {
        col: '$pink',
        fos: 14,
      },
      redDark: {
        col: '$red',
      },
      redLight: {
        col: '$white',
      },
    },
    disabled: {
      true: {
        col: '$greyOnWhite',
      },
    },
    size: {
      small: {
        fos: 14,
      },
      medium: {
        fos: 16,
      },
      large: {
        fos: 20,
        lh: 25,
      },
    },
  },
})

function Button({
  variant,
  text,
  onPress,
  disabled = false,
  style,
  fullWidth = false,
  fullSize = false,
  adjustTextToFitOneLine = false,
  size = 'large',
  numberOfLines,
}: Props): JSX.Element {
  const tokens = getTokens()
  const onPressInner = useCallback(() => {
    if (!disabled) onPress()
  }, [disabled, onPress])
  const touchableStyles: ViewStyle = useMemo(
    () => ({
      height:
        variant === 'link'
          ? 'auto'
          : size === 'small'
          ? 38
          : size === 'medium'
          ? 48
          : 60,
      ...(fullWidth && {width: '100%'}),
      ...(fullSize && {flex: 1}),
    }),
    [variant, fullSize, fullWidth, size]
  )

  

  return (
    // has to be wrapped in TouchableOpacity as tamagui does not support onPress action on
    // wrapped TouchableOpacity in styled as of v 1.11.1
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressInner}
      style={touchableStyles}
    >
      <PressableStyled
        variant={variant}
        style={style}
        size={size}
        fullWidth={fullWidth}
        fullSize={fullSize}
        disabled={disabled}
      >
       
        {text && (
          <TextStyled
            numberOfLines={adjustTextToFitOneLine ? 1 : numberOfLines}
            adjustsFontSizeToFit={adjustTextToFitOneLine}
            
            size={size}
            variant={variant}
            disabled={disabled}
          >
            {text}
          </TextStyled>
        )}
        
      </PressableStyled>
    </TouchableOpacity>
  )
}

export default Button