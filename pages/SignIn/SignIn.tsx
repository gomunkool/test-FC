import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { styles } from './SignIn.style'
import { Stage } from '../../data/Stage.data'
import { AntDesign } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { NavigationProp } from '@react-navigation/native'

type userDataType = {
  name?: string
  telephone?: number
  email?: string
  password?: number
}

interface HomeProps {
  navigation: NavigationProp<any>
}

export default function SignIn({ navigation }: HomeProps) {
  const [user, serUser] = useState({})
  const [stageNumber, serStageNumber] = useState(0)

  const main = () => {
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
