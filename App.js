import AppProviders from './src/AppProviders'
import { useFonts } from 'expo-font'
import {useEffect} from 'react'


export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }
  return (
    <AppProviders />
  )
}
