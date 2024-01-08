import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'tamagui'

const Options = ({question, answer, dispatch}) => {
    const hasAnswered = answer !== null
  return (
    <>
      {
        question.options.map((option, index) =>
         <Button 
            backgroundColor={
                hasAnswered ? 
                (
                    index===answer ? 
                    answer===question.correctOption
                    ? 'green'
                    :'red'
                    : 'grey'
                    ) : 
                    'black'
                
            }
            ml={index===answer ? 20: 0}
            key={index.toString()} 
            width={'80%'} 
            my={5}
            onPress={()=>dispatch({type: 'newAnswer', payload: index})}
            disabled={hasAnswered}
            >
                {option}
            </Button>)
     } 
    </>
  )
}

export default Options

const styles = StyleSheet.create({})