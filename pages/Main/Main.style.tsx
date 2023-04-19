import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

export const styles = StyleSheet.create({
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
    marginBottom: 10,
  },
  mainRoleDescription: {
    width: 200,
    color: '#EDEDED',
    fontFamily: 'aeonik-reg',
    fontSize: 13,
  },
})
