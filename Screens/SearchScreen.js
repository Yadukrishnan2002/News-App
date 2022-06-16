import { StyleSheet, Text, View, Dimensions, TextInput, Image, FlatList } from 'react-native'
import React,{useState,useEffect,useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import { NewsContext } from '../API/Context'
import { AntDesign } from '@expo/vector-icons';


const SearchScreen = ({navigation}) => {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    const {setSearchScreenEnabled,setCurrentHeadline, setHeadlineSingleNewsEnabled,
    darkTheme} = useContext(NewsContext)


    const handleGoback = () => {
        setSearchScreenEnabled(0)
        navigation.goBack()
    }

    const fetchSearchArticle = async (search) => {
        console.log(search)
        const {data} = await axios.get("https://newsapi.org/v2/everything?q="+search+"&apiKey=56bc1062035e4ce5985d673113cb04cc")
        setResults(data)
        console.log(data)
    
         
     }

     const handlePress = (item) => {
        setCurrentHeadline(item)
        setHeadlineSingleNewsEnabled(1)
        navigation.navigate("HeadlineSingleNews")
     }
    
    useEffect(() => {
        setResults([])
        search.length !=0 && fetchSearchArticle(search)
    },[search])

  return (
    <View style = {{...styles.Container,backgroundColor: darkTheme ? '#282c35' : 'white'}}>
        <View style = {styles.TopSearchBar}>
            <TouchableOpacity onPress={() => handleGoback()} style = {styles.BackArrow}>
                <AntDesign name="arrowleft" size={32} color="#007fff" />
            </TouchableOpacity>


            <View style = {styles.SearchWrapper}>
                <TextInput
                placeholder='Search'
                placeholderTextColor={'grey'}
                style = {styles.SearchInput}
                value = {search}
                onChangeText = {(search) => setSearch(search)}
                /> 
            </View>
        </View>

       {/* { 
          results.length !=0 && (  <View style = {styles.SearchResultsWrapper}>
                <View style = {styles.TopResultsTextWrapper}>
                    <Text style = {styles.TopResultsText}>Top Results</Text>
                </View>
                
                <View style ={styles.SearchList}>
                    <FlatList 
                        data = {contacts}
                        renderItem = {({item}) => (
                            <Text>{item.name}</Text>
                        )}
                    />
                    
                </View>
                

            </View> 
            )
    } */}

    {
        results && (
    
            <View style = {{...styles.SearchResultsWrapper,backgroundColor: darkTheme ? '#282c35' : 'white'}}>
                <View style = {styles.TopResultsTextWrapper}>
                    <Text style = {{...styles.TopResultsText,color: darkTheme ? 'white' : 'black'}}>Top Results</Text>
                </View>
                
                <View style ={styles.SearchList}>
                    <FlatList 
                        data = {results.articles}
                        renderItem = {({item}) => (
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <View style = {styles.EachNewsItem}> 
                                    <Image source={{uri: item.urlToImage}}  style = {{height: 70, width: 70}} />
                                    <Text style = {{...styles.NewsTitleText,color: darkTheme ? 'white' : 'black'}}>{item.title}</Text>
                                    <View style={{ borderBottomColor: 'white', borderBottomWidth: 3,}} />
                                </View>
                            </TouchableOpacity>
                                
                            
                        )}
                    />
                    
                </View>
                

            </View> 
            )
    }
          
         </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        
    },
    TopSearchBar: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    SearchWrapper: {
        paddingTop: 15,
        
    },
    SearchInput: {
       
        backgroundColor: '#e1e3e6',
        width: Dimensions.get('window').width - 70,
        height: 50,
        
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center'
        
    },
    BackArrow: {
      
        marginTop: 22,
    },

    EachNewsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
        paddingRight: 30,
        marginRight: 50,
    },

    NewsTitleText: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 15,
    },
    SearchResultsWrapper: {
        marginTop: 30,
        marginLeft: 10,
    },
    TopResultsTextWrapper: {
        marginLeft: 20,
    },
    TopResultsText: {
        fontSize: 25,
        fontWeight: '700'
    },
})
