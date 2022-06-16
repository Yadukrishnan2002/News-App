import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React,{useContext} from 'react'
import BookmarksTopNavBar from '../Components/BookmarksTopNavBar'
import { NewsContext } from '../API/Context'

const Bookmarks = ({navigation}) => {

    const{Bookmarks,setBookmarkScreenEnabled} = useContext(NewsContext)

    const handleBackButton = () => {
        setBookmarkScreenEnabled(0)
        navigation.goBack()
        
        
    }

    const handlePress = (item) => {
        
        setCurrentHeadline(item)
        setHeadlineSingleNewsEnabled(1)
        navigation.navigate("HeadlineSingleNews")
         
    }
    console.log("Bookmarks " + Bookmarks)

  return (
    <View style = {styles.container}>
      <BookmarksTopNavBar navigation = {navigation} />
      
      {
        Bookmarks.length !=0 ? (
    
            <View style = {styles.BookmarksWrapper}>
                
                <View style ={styles.BookmarksList}>
                    <FlatList 
                        data = {Bookmarks}
                        renderItem = {({item}) => (
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <View style = {styles.EachNewsItem}> 
                                    <Image source={{uri: item.urlToImage}}  style = {{height: 70, width: 70}} />
                                    <Text style = {styles.NewsTitleText}>{item.title}</Text>
                                    <View style={{ borderBottomColor: 'white', borderBottomWidth: 3,}} />
                                </View>
                            </TouchableOpacity>
                                
                            
                        )}
                    />
                    
                </View>
                

            </View> 

            ) : (
                <View style = {styles.WarningWrapper}>
                  <Text style = {styles.WarningText}>There are no Items in the Bookmark</Text>
                  <TouchableOpacity style = {styles.BrowseButton} onPress ={() => handleBackButton()}>
                      <Text style = {styles.BrowseButtonText}>Explore</Text>
                  </TouchableOpacity>

              </View>
            )
    }
    </View>
  )
}

export default Bookmarks

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },

    WarningWrapper: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
WarningText: {
    
    fontSize: 22,
    fontWeight: 'bold'

},
BrowseButton: {
    backgroundColor: 'red',
    width: 200,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'

},
BrowseButtonText: {
    fontSize: 18,
    color: 'white',
   

},
BookmarksWrapper: {
    marginTop: 30,
    marginLeft: 10,
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
})