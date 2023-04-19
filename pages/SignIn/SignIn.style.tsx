import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerSignIn: {
    flex: 1,
  },
  backgroundImageSignIn: {
    flex: 1,
    height: 427,
    paddingTop: 45,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  countTitleAppSignIn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  titleArrowLeft: {
    position: 'absolute',
    left: 15,
  },
  titleAppSignIn: {
    color: '#fff',
    fontFamily: 'aeonik-bold',
    fontSize: 60,
  },
  formSignIn: {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#241F44',
    height: 400,
    width: 400,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
  },
  formTitleSignIn: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'aeonik-reg',
    marginTop: 20,
    marginBottom: 20,
  },
  formTextInputSignIn: {
    color: '#EDEDED',
    fontSize: 14,
    fontFamily: 'aeonik-reg',
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  formLogoInputSignIn: {
    alignSelf: 'flex-start',
    marginLeft: 35,
    position: 'relative',
    top: 24,
    right: -8,
    zIndex: 10,
  },
  formInputSignIn: {
    width: 333,
    height: 44,
    borderColor: '#7868E4',
    borderRadius: 12,
    backgroundColor: '#241F44',
    borderWidth: 1,
    marginTop: -10,
    paddingLeft: 50,
    color: '#fff',
  },
  countForm: {
    marginTop: 60,
  },
  countFormText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: 333,
  },
  textStage: {
    fontSize: 14,
    color: '#EDEDED',
  },
  textStageNum: {
    color: '#483E89',
    fontSize: 70,
    fontFamily: 'aeonik-bold',
  },
  progressForm: {
    width: 333,
  },
  progressFormAll: {
    width: 333,
    height: 9,
    backgroundColor: '#302A5B',
    marginTop: 12,
    top: 0,
  },
  progressFormStage: {
    height: 9,
    backgroundColor: '#7868E4',
    top: -9,
  },
  buttonSignIn: {
    width: 333,
    height: 48,
    backgroundColor: '#7868E4',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonSignInText: {
    fontSize: 17,
    fontFamily: 'aeonik-reg',
    color: '#fff',
  },
})