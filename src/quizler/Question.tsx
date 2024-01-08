import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Stack, Text } from 'tamagui'
import Options from './compents/Options'
import Progress from './compents/Progress'

const Question = ({question, dispatch, answer}) => {
  return (
    <Stack alignItems='center'>
      <Text color='$blue1' mb={30}>{question.question}</Text>
     <Options question={question} dispatch={dispatch} answer={answer}/>
    </Stack>
  )
}

export default Question

const styles = StyleSheet.create({})