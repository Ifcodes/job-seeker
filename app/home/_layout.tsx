import { Stack } from 'expo-router'
import React from 'react'
import Profile from '.'
import { Platform, StatusBar, StatusBarStyle, StyleSheet } from 'react-native'
import useTheme from '@/hooks/useTheme'
import Colors from '@/constants/Colors'
import { View } from '@/components/Themed'

const HomeLayout = () => {
  const {currentColorScheme, statusBarTheme} = useTheme()

  return (
    <View>
      {/* <StatusBar barStyle={statusBarTheme } /> */}
      <Stack.Screen name='' options={{
        headerTitle: 'Home',
        headerStyle: {backgroundColor: Colors[currentColorScheme].background},
        headerShadowVisible: false
      }} />
      <Profile />
    </View>
  )
}

export default HomeLayout

const styles = StyleSheet.create({

})