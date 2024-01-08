import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import QuizHeader from './QuizHeader'
import Main from './Main'
import { questions as Qs } from './questions'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './compents/NextButton'
import ProgressView from './compents/Progress'

const initialState = {
  questions :[],
  status:'loading', //
  index: 0,
  answer: null, 
  points: 0
}

function reducer(state, action){
  switch(action.type){  
    case 'dataReceived':
        return{
          ...state,
          questions: action.payload,
          status:'ready'
        }
    case 'dataFailed':
      return{
        ...state,
        status: 'error'
      }
    case 'start':
      return{
        ...state,
        status: 'active'
      }
    case 'finish':
      return{
        ...state,
        status: 'finish'
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      return{
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points: state.points
      }
    case 'nextQuestion':
      return{
        ...state,
        index: state.index + 1,
        answer: null
      }
    default:
      throw new Error('Action unknown')
  }


}
 
const QuizApp = () => {
  const [ {status, questions, index, answer, points }, dispatch] = useReducer(reducer, initialState)
  console.log('Points', points)
  const numQuestions = questions.length
  useEffect(()=>{
    if(Array.isArray(Qs)){
      console.log(Qs)  
      dispatch({type : 'dataReceived', payload: Qs})
    }else {
      dispatch({type:'dataFailed'})
    }
  },[])


  return (
    <View>
      <QuizHeader />
     <Main>
      {status === 'loading' && <Text>Loading</Text>}
     {status === 'error' && <Text>Error in loading date</Text>}
     {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
     {status === 'active' && <>
     <ProgressView value={index} numQuestions={numQuestions} points={points}/>
     <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
     </>}
     <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>
     </Main>
    </View>
  )
}

export default QuizApp

const styles = StyleSheet.create({})