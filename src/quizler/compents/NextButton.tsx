import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'tamagui'

const NextButton = ({dispatch, answer, numQuestions, index}) => {
  const handleNext = ()=>dispatch({type: 'nextQuestion'})
  const handleFinish = () => dispatch({type: 'finish'})
  const next = index < numQuestions -1
  return (
    <>
       {
        answer !==null && <Button onPress={next ? handleNext : handleFinish} backgroundColor='teal' alignSelf='flex-end' mr={20} my={10}>{next? 'Next':'Finish'}</Button>
       } 
    </>
  )
}

export default NextButton

const styles = StyleSheet.create({})