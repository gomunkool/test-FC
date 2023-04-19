import { Feather, Foundation } from '@expo/vector-icons'

type StageType = {
  id: number
  title: string
  stage: number
  icon: React.ReactNode
  controlName: string
  progress: number
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
