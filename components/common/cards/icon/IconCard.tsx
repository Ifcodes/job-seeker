import { View } from '@/components/Themed'
import Colors from '@/constants/Colors'
import React from 'react'
import { Image } from 'react-native'

const IconCard = ({iconUrl, alt}:{iconUrl: string, alt?: string}) => {
  return (
    <View>
        <Image src={iconUrl} alt={alt} resizeMode='contain'/>
    </View>
  )
}

export default IconCard