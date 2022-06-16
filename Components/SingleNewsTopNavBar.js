
import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';
import { NavigationContainer } from '@react-navigation/native';


const SingleNewsTopNavBar = ({navigation}) => {
    const {setCategory, HeadlineSingleNewsEnabled,setHeadlineSingleNewsEnabled,darkTheme} = useContext(NewsContext)

    const handleBackButton = () => {
        setHeadlineSingleNewsEnabled(0)
        navigation.goBack()
        
        
    }
   
  return (
    <View style = {{...styles.TopBarContainer, backgroundColor: darkTheme ? '#282c35' : 'white'}}>
        
      
       
            <TouchableOpacity style = {styles.LeftArrow}
            onPress = {() => handleBackButton()}
            >
                <AntDesign name="left" size={24} color="#007fff" />
                <Text style = {{...styles.LeftArrowText,color: darkTheme ? 'white' : 'black'}}>Discover</Text>

            </TouchableOpacity>
          
      

      <View style = {styles.HeadingWrapper}>
          
            <Text style = {{...styles.DiscoverText,color: darkTheme ? 'white' : 'black'}}>HeadLine</Text>
             
      </View>

      <View style = {styles.RightIcon}>
         
            <TouchableOpacity style = {styles.bookmarkIcon}>
                <Image source = {{uri: ""}} style = {{height: 24,width: 24}} />
            </TouchableOpacity>
            
      </View>

    </View>

  )
}

const styles = StyleSheet.create({
    TopBarContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 50,
        borderRadius: 10,

    },
    LeftArrow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    HeadingWrapper: {
       
    },
    HeadingText: {

        fontSize: 22,
        
    },
    
    RightIcon: {
        
        
    },
    bookmarkIcon: {
        paddingRight: 40,
    },
    DarkModeButton: {
        paddingLeft: 25,
    },
    AllNewsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },

    DiscoverText: {
        fontSize: 22,
        paddingRight: 40,
    },
    AllNewsText: {
        fontSize: 22,
        paddingRight: 20,
        
    },
})

export default SingleNewsTopNavBar