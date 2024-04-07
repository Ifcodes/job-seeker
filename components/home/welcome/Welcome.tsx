import { Text } from '@/components/Themed'
import { Stack } from 'expo-router'
import React from 'react'
import { StatusBar, StatusBarStyle } from 'react-native'

const Welcome = ({statusBarTheme}: {statusBarTheme: StatusBarStyle}) => {

  return (
    <Text>
        Welcome
    </Text>
  )
}

export default Welcome