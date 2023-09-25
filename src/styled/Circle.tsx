import { GetProps, Stack, styled } from 'tamagui' 

export const Circle = styled(Stack, {
  name: 'Circle', 
  borderRadius: 100_000_000,
})

export type CircleProps = GetProps<typeof Circle>