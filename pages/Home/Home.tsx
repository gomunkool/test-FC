import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Home.style'
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
