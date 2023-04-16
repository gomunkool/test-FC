import { StatusBar } from 'expo-status-bar'
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

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
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('./assets/Background_img.png')}
        >
          <Text style={styles.titleApp}>FC.APP</Text>
          <Text style={styles.descriptionApp}>Witaj w Football Challenge</Text>
        </ImageBackground>
        <View style={styles.bottomBoard}>
          <View style={styles.contLogIn}>
            <Text style={styles.textLogIn}>Masz już konto?</Text>
            <TouchableOpacity style={styles.buttonLogIn}>
              <Text style={styles.buttonLogInText}>Zaloguj się</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.countSetUp}>
            <Text style={styles.textLogIn}>Masz już konto?</Text>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('./assets/google.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('./assets/facebook.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('./assets/apple.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('./assets/email.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>
                Zarejestruj się E-mailem
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    )
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 427,
    paddingTop: 45,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  titleApp: {
    color: '#fff',
    fontFamily: 'aeonik-bold',
    fontSize: 100,
  },
  descriptionApp: {
    color: '#fff',
    fontFamily: 'aeonik-reg',
    fontSize: 20,
  },
  bottomBoard: {
    backgroundColor: '#241F44',
    bottom: -28,
    left: 0,
    height: 428,
    width: '100%',
    zIndex: 10,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    transform: [{ translateY: -56 }],
  },
  contLogIn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogIn: {
    color: '#fff',
    fontFamily: 'aeonik-reg',
    fontSize: 14,
    paddingTop: 26,
    paddingBottom: 18,
  },
  buttonLogIn: {
    width: 333,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#7868E4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogInText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'aeonik-reg',
  },
  countSetUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSetUp: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#7868E4',
    borderRadius: 12,
    backgroundColor: '#241F44',
    borderWidth: 1,
    width: 333,
    height: 44,
    marginBottom: 10,
  },
  buttonSetUpText: {
    color: '#EDEDED',
    fontSize: 14,
    fontFamily: 'aeonik-reg',
  },
  countSetUpImage: {
    position: 'absolute',
    height: 30,
    width: 30,
    left: 10,
    top: 6,
    borderRadius: 50,
    backgroundColor: '#fff',
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setUpImage: {
    height: 25,
    width: 25,
  },
})
