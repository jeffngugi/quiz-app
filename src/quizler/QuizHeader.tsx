import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack, Text } from 'tamagui'

const QuizHeader = () => {
  return (
    <Stack>
      <Text color='turquoise' fontFamily={'$body'} fontSize={40} alignSelf='center'>Funny Quiz header</Text>
    </Stack>
  )
}

export default QuizHeader

const styles = StyleSheet.create({})