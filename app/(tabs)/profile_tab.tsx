import EditScreenInfo from "@/components/EditScreenInfo"
import { View, Text } from "@/components/Themed"
import { useRef } from "react"
import { DrawerLayoutAndroid, Pressable, StyleSheet, TouchableOpacity } from "react-native"

const navigationView = (handleCloseDrawer: () => void) => {
    return (
        <View>
            <Text>The view</Text>
            <TouchableOpacity onPress={handleCloseDrawer}>
                <Text>Go back</Text>
            </TouchableOpacity>
        </View>
    )
}

const ProfileTab = () => {
  const drawer = useRef<DrawerLayoutAndroid>(null)

  const handleOpenDrawer = () => {
    if(drawer) return drawer.current?.openDrawer()
  }

  const handleCloseDrawer = () => {
    if(drawer) return drawer.current?.closeDrawer()
  }
  return (
    <DrawerLayoutAndroid drawerWidth={100} drawerPosition="right" ref={drawer} renderNavigationView={() => navigationView(handleCloseDrawer)}>
        <View>
            {/* <Text style={styles.title} />       */}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/(tabs)/two.tsx" />
            <Pressable onPress={handleOpenDrawer}>
              <Text style={styles.title}>Open</Text>
            </Pressable>
        </View>
    </DrawerLayoutAndroid>
  )
}

export default ProfileTab

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });