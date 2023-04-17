import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
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

const styles = StyleSheet.create({
  mainCount: {
    flex: 1,
  },
  mainBackgroundImage: {
    flex: 1,
    height: 427,
    paddingTop: 45,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  mainTitleCount: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  titleArrowLeft: {
    position: 'absolute',
    left: -75,
  },
  MainTitleApp: {
    color: '#fff',
    fontFamily: 'aeonik-bold',
    fontSize: 60,
  },
  mainInfoCount: {
    flex: 11,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#241F44',
    height: 400,
    width: 400,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  mainTitle: {
    fontFamily: 'aeonik-bold',
    color: '#fff',
    fontSize: 20,
    marginTop: 40,
    marginBottom: 25,
  },
  mainDescription: {
    fontFamily: 'aeonik-reg',
    color: '#EDEDED',
    fontSize: 14,
    width: 300,
    marginBottom: 30,
  },
  mainRolesCount: {},
  mainRoleCount: {
    backgroundColor: '#6053B6',
    width: 333,
    height: 96,
    borderRadius: 12,
    borderColor: '#6053B6',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  mainRoleImgCount: {},
  mainRoleImg: {
    height: '115%',
    transform: [{ translateY: -13 }, { translateX: -1 }],
  },
  mainRoleDescriptionCount: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  mainRoleTitle: {
    color: '#fff',
    fontFamily: 'aeonik-bold',
    fontSize: 15,
    marginBottom: 5,
  },
  mainRoleDescription: {
    width: 200,
    color: '#EDEDED',
    fontFamily: 'aeonik-reg',
    fontSize: 13,
  },
})
