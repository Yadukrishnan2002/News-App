import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useContext} from 'react'
import { Dimensions } from 'react-native'
import { NewsContext } from '../API/Context'
import TopNavigationBar from '../Components/TopNavigationBar'
import SingleNewsTopNavBar from '../Components/SingleNewsTopNavBar'

const HeadlineSingleNews = ({navigation}) => {

    // const {
    //     currentHeadline: {article}
    // } = useContext(NewsContext)
    
    const {currentHeadline, darkTheme} = useContext(NewsContext)
    console.log(currentHeadline)

  return (
    <View style = {{...styles.NewsWrapper,backgroundColor: darkTheme ? '#282c35' : 'white'}}>
        <SingleNewsTopNavBar navigation={navigation}/>
       <Image source = {{uri: currentHeadline.urlToImage}} style = {{height: '45%',width: Dimensions.get('window').width, backgroundColor: 'white'}} />

        <View style = {{...styles.Content, backgroundColor: darkTheme ? '#282c35' : 'white'}}>
            <Text style = {{...styles.title, color: darkTheme ? 'white' : 'black'}}>{currentHeadline.title}</Text>
            <Text style = {{...styles.descriptionText, color: darkTheme ? 'white' : 'black'}}>{currentHeadline.description}</Text>

            <Text style = {{color: 'grey'}}>
                Author: <Text>{currentHeadline.author ?? "unknown"}</Text>

            </Text>
        </View>
      
    </View>
  )
}

export default HeadlineSingleNews

const styles = StyleSheet.create({

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 10,

    },
    NewsWrapper: {
        height: Dimensions.get('window').height ,
        width: Dimensions.get("window").width,
      
    },

    descriptionText: {
        fontSize: 18,
        paddingBottom: 10,
    },
    Content: {
        padding: 15,
        flex: 1,
    },

})