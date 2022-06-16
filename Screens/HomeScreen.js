import { StyleSheet, Text, View ,SafeAreaView, useWindowDimensions,ScrollView, Image, Dimensions} from 'react-native'
import React,{useEffect,useState,useContext} from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import { API_KEY } from '../API/API'
import axios from 'axios'
import { NewsContext } from '../API/Context'
import Search from '../Components/Search'
import { categories,sources,getNews } from '../API/API'
import { TouchableOpacity } from 'react-native'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import SingleNews from '../Components/SingleNews'
import { NavigationContainer } from '@react-navigation/native'

const HomeScreen = ({navigation}) => {


    
   

    const windowWidth = Dimensions.get("window").width
    const SLIDE_WIDTH = Math.round(windowWidth/3.5)

    const { width: screenWidth } = Dimensions.get('window')

    const [currentNews,setCurrentNews] = useState()
    // const {TopHeadlines} = useContext(NewsContext)

   
    const {
        TopHeadlines: {articles},
        setCategory,
        setSource,
        setIndex,
        setCurrentHeadline,
        currentHeadline,
        HeadlineSingleNewsEnabled,
        setHeadlineSingleNewsEnabled,
        setBookmarkScreenEnabled,
        darkTheme
     
    } = useContext(NewsContext)

    let headlines = []

    if(articles){
        headlines = articles.slice(0,10)
    }

    const handleTopHeadlinePress = (item) => {
      
        setCurrentNews(item)
        setCurrentHeadline(item)
        setHeadlineSingleNewsEnabled(1)
  
        
        navigation.navigate("HeadlineSingleNews")
       
        
    }

    const BookmarkPress = () => {
        setBookmarkScreenEnabled(1)
        navigation.navigate("Bookmarks")
    }
    
    console.log("head: " + HeadlineSingleNewsEnabled)

    const CarouselCardItem = (({item,index},parallaxProps) => {
        return (
            <TouchableOpacity onPress={() => handleTopHeadlinePress(item)}>
                <View style = {{...styles.item, backgroundColor: darkTheme ? '#212121' : 'white'}}>
                    <ParallaxImage 
                    source = {{uri: item.urlToImage}}
                    containerStyle = {styles.imageContainer}
                    style = {styles.image}
                    parallaxFactor = {0.4}
                    {...parallaxProps}
                    />
                    <Text style={{...styles.title,color: darkTheme ? 'white' : 'black'}}>
                        { item.title }
                    </Text>

                </View>
            </TouchableOpacity>
          )
    })

    const SLIDER_WIDTH = Dimensions.get('window').width + 80
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
    const isCarousel = React.useRef(null)


    
    return (
      <SafeAreaView style = {{ backgroundColor: darkTheme ? '#282c35' : 'white'}}>
          <ScrollView>

         
        <Search navigation = {navigation}/>

        <View style = {styles.CategoryWrapper}>
            <View style = {styles.HeadingCategoryTextWrapper}>
                <Text style = {{...styles.CategoryText,color: darkTheme ? 'white' : 'black'}}>Categories</Text>
            </View>

            <View style = {styles.Categories}>
                <ScrollView horizontal style = {styles.CategoriesScroll} showsHorizontalScrollIndicator={false}>
                    {
                        categories.map((item,index) => {

                            return(
                            <TouchableOpacity style = {styles.CategoryItem} key = {index}
                            onPress = {() => item.name == "Bookmarks" ? BookmarkPress() :setCategory(item.apiName)}
                            >
                                <Image source = {{uri: item.pic}} style = {styles.CategoryImage} />
                                <Text style = {{...styles.CategoryItemText,color: darkTheme ? 'white' : 'black'}}>{item.name}</Text>
                            </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>

        <View style = {styles.CategoryWrapper}>
            <View style = {styles.HeadingCategoryTextWrapper}>
                <Text style = {{...styles.CategoryText,color: darkTheme ? 'white' : 'black'}}>Sources</Text>
            </View>

            <View style = {styles.Categories}>
                <ScrollView horizontal style = {styles.CategoriesScroll} showsHorizontalScrollIndicator={false}>
                    {
                        sources.map((item,index) => {
                            
                            return(
                            <TouchableOpacity style = {styles.CategoryItem} key = {index}
                            onPress = {() => setSource(item.id)}
                            >
                                <Image source = {{uri: 'https://drive.google.com/uc?export=view&id=' + item.picId}} style = {styles.CategoryImage} />
                                <Text style = {{...styles.CategoryItemText,color: darkTheme ? 'white' : 'black'}}>{item.name}</Text>
                            </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>

        <View style = {styles.TopHeadlinesWrapper}>
            <View style = {styles.HeadingTextWrapper}>
                <Text style = {{...styles.TopHeadlinesText,color: darkTheme ? 'white' : 'black'}}>Top Headlines</Text>
            </View>

            <View>
                {/* {
                   TopHeadlines && ( <Carousel 
                    layout = {'default'}
                    data = {TopHeadlines.articles}
                    renderItem = {({item,index}) => (
                       
                        <TouchableOpacity style = {styles.TopHeadlineItem} key = {index} >
                            <Image source = {{uri: item.urlToImage}} style = {styles.HeadlineImage} />
                            <Text style = {{fontSize: 20,}}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    sliderWidth = {windowWidth}
                    itemWidth = {SLIDE_WIDTH}
                    layoutCardOffset={9}
                    inactiveSlideShift={0}
                    useScrollView={true}
                    />
                   )
                } */}

                        {/* <Carousel
                            layout="default"
                            // layoutCardOffset={9}
                            ref={isCarousel}
                            data={TopHeadlines.articles}
                            renderItem={CarouselCardItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            inactiveSlideShift={0}
                            useScrollView={true}
                           
                            inactiveSlideScale = {1}
                            
                    /> */}

                
                    <Carousel
                                        sliderWidth={screenWidth}
                                        sliderHeight={screenWidth}
                                        itemWidth={screenWidth - 60}
                                        data={headlines}
                                        renderItem={CarouselCardItem}
                                        hasParallaxImages={true}
                                    />
                
                            
                            </View>

        </View>
        
        </ScrollView>
      </SafeAreaView>
    )
  }
  

const styles = StyleSheet.create({
    CategoryImage: {
       
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 10,
        
    },
    CategoryWrapper: {
        marginTop: 40,
    },
    HeadingCategoryTextWrapper: {
        marginLeft: 30,
    },
    CategoryText: {
        fontSize: 22,
        fontWeight: '500'
    },
    Categories: {
        marginTop: 20,
        
    },
    CategoriesScroll: {
        paddingLeft: 40,
        marginRight: -100,
        
    },
    CategoryItem: {
       marginRight: 30,
       justifyContent: 'center',
       alignItems: 'center'
    },
    CategoryItemText: {
        fontSize: 16,
        fontWeight: '500'
    },
    TopHeadlinesWrapper: {
        marginTop: 40,
    },
    HeadingTextWrapper: {
        marginLeft: 30,
    },
    TopHeadlinesText: {
        fontSize: 22,
        fontWeight: '500',
    },
    HeadlineImage: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    TopHeadlineItem: {
        
        alignItems:"center",
        justifyContent: 'space-between',
        backgroundColor: "black",
        width: 200,
        height: 200,
       
        
    },
    HeadlineImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },




    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: Math.round((Dimensions.get('window').width + 80) * 0.7),
        paddingBottom: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        
      },
    //   image: {
    //     width: Math.round((Dimensions.get('window').width + 80) * 0.7),
    //     height: 250,
    //   },
      header: {
        color: "#222",
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
      },


      item: {
        width: Dimensions.get('window').width - 60,
        height: Dimensions.get('window').width - 60,

        shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 7,
          
          marginTop: 40,
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
      title: {
          fontSize: 20,
         padding: 15,
         fontWeight: '500'
         
      },
})

  export default HomeScreen