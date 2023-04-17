import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { AntDesign, Feather, Foundation } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'

type StageType = {
  id: number
  title: string
  stage: number
  icon: React.ReactNode
  controlName: string
  progress: number
}
type userDataType = {
  name?: string
  telephone?: number
  email?: string
  password?: number
}

export const Stage: StageType[] = [
  {
    id: 1,
    title: 'Imię i nazwisko',
    icon: (
      <Feather
        name="user"
        size={24}
        color="#7868E4"
        style={{
          alignSelf: 'flex-start',
          marginLeft: 35,
          position: 'relative',
          top: 24,
          right: -8,
          zIndex: 10,
        }}
      />
    ),
    stage: 1,
    controlName: 'name',
    progress: 84,
  },
  {
    id: 2,
    title: 'Telefon',
    icon: (
      <Foundation
        name="telephone"
        size={24}
        color="#7868E4"
        style={{
          alignSelf: 'flex-start',
          marginLeft: 35,
          position: 'relative',
          top: 24,
          right: -8,
          zIndex: 10,
        }}
      />
    ),
    stage: 2,
    controlName: 'telephone',
    progress: 160,
  },
  {
    id: 3,
    title: 'E-mail',
    icon: (
      <Feather
        name="mail"
        size={24}
        color="#7868E4"
        style={{
          alignSelf: 'flex-start',
          marginLeft: 35,
          position: 'relative',
          top: 24,
          right: -8,
          zIndex: 10,
        }}
      />
    ),
    stage: 3,
    controlName: 'mail',
    progress: 240,
  },
  {
    id: 4,
    title: 'Hasło (min 6 znaków, w tym cyfra)',
    icon: (
      <Feather
        name="lock"
        size={24}
        color="#7868E4"
        style={{
          alignSelf: 'flex-start',
          marginLeft: 35,
          position: 'relative',
          top: 24,
          right: -8,
          zIndex: 10,
        }}
      />
    ),
    stage: 4,
    controlName: 'password',
    progress: 333,
  },
]

interface HomeProps {
  navigation: NavigationProp<any>
}

export default function SignIn({ navigation }: HomeProps) {
  const [user, serUser] = useState({})
  const [stageNumber, serStageNumber] = useState(0)

  const main = () => {
    console.log('1111')
    navigation.navigate('Main')
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data: Record<string, number>) => {
    serUser((pref) => ({
      ...pref,
      data,
    }))

    if (stageNumber < 3) {
      serStageNumber((pref) => pref + 1)
    } else {
      const response = await fetch(
        'http://api.dev.footballchallengeapp.com/auth/registration/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken':
              '8C4wZUAfr5NVLfg7SWi6CpqhkhS7HKwos6HoDLWVf4dIcyL24enVpfi2n1KHIUUu',
          },
          body: JSON.stringify(user),
        }
      ).then((res) => {
        return res.json()
      })
      console.log(response)
      main()
    }
  }

  const stageBack = () => {
    if (stageNumber > 0) {
      serStageNumber((pref) => pref - 1)
    }
  }

  return (
    <View style={styles.containerSignIn}>
      <ImageBackground
        style={styles.backgroundImageSignIn}
        source={require('../../assets/Background_img.png')}
      >
        <KeyboardAvoidingView>
          <View style={styles.countTitleAppSignIn}>
            <AntDesign
              name="arrowleft"
              size={36}
              color="white"
              style={styles.titleArrowLeft}
              onPress={stageBack}
            />
            <Text style={styles.titleAppSignIn}>FC.APP</Text>
          </View>
          <View style={styles.formSignIn}>
            <Text style={styles.formTitleSignIn}>Utwórz konto</Text>
            <Text style={styles.formTextInputSignIn}>
              {Stage[stageNumber].title}
            </Text>
            {Stage[stageNumber].icon}
            <Controller
              control={control}
              name={Stage[stageNumber].controlName}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  autoFocus={true}
                  style={styles.formInputSignIn}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && (
              <Text style={{ color: 'red', position: 'relative' }}>
                Pole musi być wypełnione.
              </Text>
            )}
            <View style={styles.countForm}>
              <View style={styles.countFormText}>
                <Text style={styles.textStage}>Krok:</Text>
                <Text style={styles.textStageNum}>
                  {Stage[stageNumber].stage}/4
                </Text>
              </View>
              <View style={styles.progressForm}>
                <View style={styles.progressFormAll}></View>
                <View
                  style={[
                    styles.progressFormStage,
                    { width: Stage[stageNumber].progress },
                  ]}
                ></View>
              </View>
              <TouchableOpacity
                style={styles.buttonSignIn}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonSignInText}>Dalej</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
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
