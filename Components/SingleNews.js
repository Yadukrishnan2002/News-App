import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useContext} from 'react'
import { Dimensions } from 'react-native'
import { NewsContext } from '../API/Context'

const SingleNews = ({item,index}) => {

    const {currentNewsItem,setCurrentNewsItem, darkTheme} = useContext(NewsContext)
    setCurrentNewsItem(item)
    console.log(currentNewsItem)

  return (
    <View style = {styles.NewsWrapper}>
        <Image source = {{uri: item.urlToImage}} style = {{height: '45%',width: Dimensions.get('window').width, backgroundColor: 'white'}} />

        <View style = {{...styles.Content, backgroundColor: darkTheme ? '#282c35' : 'white'}}>
            <Text style = {{...styles.title, color: darkTheme ? 'white' : 'black'}}>{item.title}</Text>
            <Text style = {{...styles.descriptionText, color: darkTheme ? 'white' : 'black'}}>{item.description}</Text>

            <Text style = {{color: 'grey'}}>
                Author: <Text>{item.author ?? "unknown"}</Text>

            </Text>
        </View>
      
    </View>
  )
}

export default SingleNews

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