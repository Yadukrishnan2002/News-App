import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NewsContext } from '../API/Context';
import { NavigationContainer } from '@react-navigation/native';


const TopNavigationBar = ({index, setIndex, item}) => {
    
    // const {index,setIndex} = useContext(NewsContext)
    const {setCategory, HeadlineSingleNewsEnabled,setHeadlineSingleNewsEnabled,
        setBookmarks,Bookmarks, category,darkTheme, setDarkTheme} = useContext(NewsContext)

    const handleBackButton = () => {
        setHeadlineSingleNewsEnabled(0)
        setIndex(0)
        
    }

    const handleBookmarkPress = () => {

        const isFound = Bookmarks.some(ele => {
            if(ele.title === item.title){
                return true
            }
        })
        
        if(isFound){
            setBookmarks(Bookmarks.filter(ele => ele.title != item.title))
        }else{
            console.log("item: " + item.title)
            setBookmarks(item)
            
        }
        
    }

    const handleReload = () => {
        setCategory('general')
    }
   
  return (
    <View style = {{...styles.TopBarContainer,  backgroundColor: darkTheme ? '#282c35' : 'white',borderBottomColor: darkTheme ? 'white' : 'black',}}>
        
      {
        HeadlineSingleNewsEnabled == 0 ? (  index == 0 ? (
              <TouchableOpacity style = {styles.DarkModeButton} onPress = {() => setDarkTheme(!darkTheme)}>
                  <Image source = {darkTheme ? require('../assets/sun.png') : require('../assets/moon.png') } style = {{height: 28,width: 28}} />
              </TouchableOpacity>

          ) : (
            <TouchableOpacity style = {styles.LeftArrow}
            onPress = {() => setIndex(index === 0 ? 1 : 0)}
            >
                <AntDesign name="left" size={24} color = "#007fff" />
                <Text style = {{...styles.LeftArrowText, color: darkTheme ? 'white' : 'black'}}>Discover</Text>

            </TouchableOpacity>
            
          )
          ) : (
            <TouchableOpacity style = {styles.LeftArrow}
            onPress = {() => handleBackButton()}
            >
                <AntDesign name="left" size={24} color="black" />
                <Text style = {{...styles.LeftArrowText,color: darkTheme ? 'white' : 'black'}}>Discover</Text>

            </TouchableOpacity>
          )
      }

      <View style = {styles.HeadingWrapper}>
          {
             HeadlineSingleNewsEnabled == 0 && ( index == 0 ? (
                <Text style = {{...styles.DiscoverText,color: darkTheme ? 'white' : 'black'}}>Discover</Text>
              ) : (
                <Text style = {{...styles.AllNewsText,color: darkTheme ? 'white' : 'black'}}>All News</Text>
              ) )
          }
         
      </View>

      <View style = {styles.RightIcon}>
          {
             HeadlineSingleNewsEnabled == 0 && ( index == 0 ? (
                  <TouchableOpacity style = {styles.AllNewsButton}
                  onPress = {() => setIndex(index === 0 ? 1 : 0)}
                  >
                      <Text style = {{color: darkTheme ? 'white' : 'black'}}>All News</Text>
                      <AntDesign name="right" size={24} color = "#007fff" />
                  </TouchableOpacity>

              ) : (
                <TouchableOpacity style = {styles.bookmarkIcon} onPress = {() => handleReload()}>
                    <Image source = {require('../assets/reload2.png')} style = {{height: 24,width: 24}} />
                </TouchableOpacity>
              ) )
          }

      </View>

   

    </View>

    
  )
}

export default TopNavigationBar

const styles = StyleSheet.create({
    TopBarContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        height: 50,
        
        borderBottomWidth: 0.2,

        

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
        paddingLeft: 50,
    },
    AllNewsText: {
        fontSize: 22,
        paddingRight: 40,
        
    },
})