import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useContext} from 'react'
import { NewsContext } from '../API/Context'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import SingleNews from '../Components/SingleNews'
import { ScrollView } from 'react-native'

const NewsScreen = () => {

 const {
     News: {articles},
     currentHeadline
    } = useContext(NewsContext)



 const [activeIndex,setActiveIndex] = useState()

 const windowHeight = Dimensions.get('window').height

  return (
    <ScrollView style = {styles.CarouselWrapper}>
         {
            articles && (
                <Carousel
                    layout = {'stack'}
                    data = {articles}
                    sliderHeight = {windowHeight}
                    itemHeight = {windowHeight}
                    vertical = {true}
                    renderItem = {({item,index}) => (
                        <SingleNews item = {item} index = {index} />
                    )}
                    onSnapToItem = {index => setActiveIndex(index)}
                    
                
                />
            )

        } 
        
      
    </ScrollView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({
    CarouselWrapper: {
        flex: 1,
        backgroundColor: "black",
    },
})