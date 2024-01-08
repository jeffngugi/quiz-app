import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Heading, Text, Stack } from 'tamagui'

const StartScreen = ({numQuestions, dispatch}) => {
  return (
    <Stack>
    <Heading alignSelf='center' color='red'>Welcome to funny quiz</Heading>
    <Text color='green' alignSelf='center' my={20}>{numQuestions} to be answered</Text>
      <Button mx={20} onPress={()=> dispatch({type: 'start'})}>Click here to proceed</Button>
    </Stack>
  )
}

export default StartScreen

const styles = StyleSheet.create({})