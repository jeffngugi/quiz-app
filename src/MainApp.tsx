import React from 'react'
import { Stack , Text, AlertDialog} from 'tamagui'
import { Circle } from './styled/Circle'
import Pressable from './styled/Pressable'
import Button from './styled/Button'

const MainApp = () => {
  return (
    <Stack margin={10}>
      <Text color="green">sdsdHello</Text>
      <Circle x={10} y={10} backgroundColor="red" width={20} height={20}/>
      <Text color="red">This is below circle</Text>
      <Pressable padding={10} bg='green'>
        <Text>Jeff</Text>
      </Pressable>
      <Button onPress={()=> console.log("Hello Jeff ngugi") } variant='secondary' text='Hello' />
    </Stack>
  )
}

export default MainApp
