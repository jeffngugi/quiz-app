// this provides some helpful reset styles to ensure a more consistent look

// only import this from your web app, not native

import { Button, TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { SafeAreaView, Text, View } from 'react-native'
export default function App() {

  return (

    <TamaguiProvider config={config}>

      <SafeAreaView>
        <Button>Hello world</Button>
      </SafeAreaView>

    </TamaguiProvider>

  )

}
