import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Progress, Stack, YStack, XStack } from 'tamagui'


const ProgressView = ({value, numQuestions, points}) => {
  return (
    <Stack mx='10'>
      <Progress value={value * 10}>
        <Progress.Indicator animation='lazy' />
      </Progress>
      <XStack justifyContent='space-between'>
        <Text>Question {value + 1}/{numQuestions}</Text>
        <Text>{points}/280</Text>
      </XStack>
    </Stack>
  )
}

export default ProgressView

const styles = StyleSheet.create({})