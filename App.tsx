import { StyleSheet } from 'react-native'
import Home from './navigate'

import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import { useState } from 'react'

const fonts = () =>
  Font.loadAsync({
    'aeonik-reg': require('./assets/fonts/AeonikTRIAL-Regular.otf'),
    'aeonik-bold': require('./assets/fonts/AeonikTRIAL-Bold.otf'),
  })

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return <Home />
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({})
