import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { NavigationProp } from '@react-navigation/native'

interface HomeProps {
  navigation: NavigationProp<any>
}

export default function Home({ navigation }: HomeProps) {
  const signIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../assets/Background_img.png')}
      >
        <View style={styles.countTitleApp}>
          <Text style={styles.titleApp}>FC.APP</Text>
          <Text style={styles.descriptionApp}>Witaj w Football Challenge</Text>
        </View>
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
                  source={require('../../assets/google.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('../../assets/facebook.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('../../assets/apple.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>Użyj konta Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSetUp} onPress={signIn}>
              <View style={styles.countSetUpImage}>
                <ImageBackground
                  style={styles.setUpImage}
                  source={require('../../assets/email.png')}
                />
              </View>
              <Text style={styles.buttonSetUpText}>
                Zarejestruj się E-mailem
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: 427,
    width: '100%',
  },
  countTitleApp: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  titleApp: {
    color: '#fff',
    fontFamily: 'aeonik-bold',
    fontSize: 100,
    paddingTop: 70,
  },
  descriptionApp: {
    color: '#fff',
    fontFamily: 'aeonik-reg',
    fontSize: 20,
  },
  bottomBoard: {
    flex: 1,
    backgroundColor: '#241F44',
    bottom: 0,
    left: 0,
    height: 428,
    width: '100%',
    zIndex: 10,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
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
