import { useColorScheme } from '@/components/useColorScheme';
import { useContext } from 'react';
import { Appearance, ColorSchemeName, StatusBarStyle } from 'react-native';

const useTheme = () => {
  const currentColorScheme = useColorScheme() ?? 'light'
  const systemTheme = Appearance;
  const statusBarStyle = {
    light: 'dark-content',
    dark: 'light-content', 
    default: 'default'
  }

  const statusBarTheme: StatusBarStyle = statusBarStyle[currentColorScheme] as StatusBarStyle
    
  console.log({currentColorScheme})

  const changeTheme = (val: ColorSchemeName) => {
    console.log({val})
    systemTheme.setColorScheme(val)
  }
  return {
    currentColorScheme,
    changeTheme,
    statusBarTheme
  }
}

export default useTheme