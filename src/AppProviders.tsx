import React from 'react'
import config from '../tamagui.config'
import { Button, TamaguiProvider } from 'tamagui'
import { SafeAreaView } from 'react-native'
import QuizApp from './quizler/QuizApp'
// import MainApp from './MainApp'



const AppProviders = () => {
  return (
    <SafeAreaView>
    <TamaguiProvider config={config}>
        {/* <MainApp /> */}
        <QuizApp />
    </TamaguiProvider>
    </SafeAreaView>
  )
}

export default AppProviders
