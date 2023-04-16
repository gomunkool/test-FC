import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./assets/Background_img.png')}
      >
        <Text style={styles.titleApp}>FC.APP</Text>
      </ImageBackground>
      <Text>аваыва</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    background: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 375,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleApp: {
    color: '#fff',
  },
})
