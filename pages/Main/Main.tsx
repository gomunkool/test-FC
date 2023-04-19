import { Text, View, ImageBackground, Image } from 'react-native'
import { styles } from './Main.style'
import { AntDesign } from '@expo/vector-icons'

export default function Home() {
  return (
    <View style={styles.mainCount}>
      <ImageBackground
        style={styles.mainBackgroundImage}
        source={require('../../assets/Background_img.png')}
      >
        <View style={styles.mainTitleCount}>
          <AntDesign
            name="arrowleft"
            size={36}
            color="white"
            style={styles.titleArrowLeft}
          />
          <Text style={styles.MainTitleApp}>FC.APP</Text>
        </View>
        <View style={styles.mainInfoCount}>
          <Text style={styles.mainTitle}>Wybierz rodzaj konta</Text>
          <Text style={styles.mainDescription}>
            Wybierz rodzaj swojego konta. W późniejszym etapie będzie możliwość
            zmiany lub dodania innych typów konta.
          </Text>
          <View style={styles.mainRolesCount}>
            <View style={styles.mainRoleCount}>
              <View style={styles.mainRoleImgCount}>
                <Image
                  source={require('../../assets/3.png')}
                  style={styles.mainRoleImg}
                />
              </View>
              <View style={styles.mainRoleDescriptionCount}>
                <Text style={styles.mainRoleTitle}>Trener</Text>
                <Text style={styles.mainRoleDescription}>
                  Zarządza drużynami, organizuje wydarzenia i wprowadza
                  statystyki zawodników
                </Text>
              </View>
            </View>
            <View style={styles.mainRoleCount}>
              <View style={styles.mainRoleImgCount}>
                <Image
                  source={require('../../assets/4.png')}
                  style={styles.mainRoleImg}
                />
              </View>
              <View style={styles.mainRoleDescriptionCount}>
                <Text style={styles.mainRoleTitle}>Zawodnik</Text>
                <Text style={styles.mainRoleDescription}>
                  Dołącza do drużyny i bierze udział w sparingach oraz
                  turniejach
                </Text>
              </View>
            </View>
            <View style={styles.mainRoleCount}>
              <View style={styles.mainRoleImgCount}>
                <Image
                  source={require('../../assets/2.png')}
                  style={styles.mainRoleImg}
                />
              </View>
              <View style={styles.mainRoleDescriptionCount}>
                <Text style={styles.mainRoleTitle}>Kibic</Text>
                <Text style={styles.mainRoleDescription}>
                  Obserwuje wydarzenia i drużyny, może być opiekunem gracza
                </Text>
              </View>
            </View>
            <View style={styles.mainRoleCount}>
              <View style={styles.mainRoleImgCount}>
                <Image
                  source={require('../../assets/1.png')}
                  style={styles.mainRoleImg}
                />
              </View>
              <View style={styles.mainRoleDescriptionCount}>
                <Text style={styles.mainRoleTitle}>Organizator</Text>
                <Text style={styles.mainRoleDescription}>
                  Tworzy i organizuje sparingi, turnieje i wydarzenia
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
