import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React, {useContext} from 'react'
import { TouchableOpacity } from 'react-native'
import { NewsContext } from '../API/Context'

const Search = ({navigation}) => {

  const {setSearchScreenEnabled} = useContext(NewsContext)

  const handlePress = () => {
    setSearchScreenEnabled(1)
    navigation.navigate("SearchScreen")
  }

  return (
      
    <View style = {styles.SearchWrapper}>
      <TouchableOpacity onPress={() => handlePress()}>
        <View  style = {styles.SearchInput}>
          <Text style = {styles.placeholderText}>Search</Text>
        </View>

        {/* <TextInput
        placeholder='Search'
        placeholderTextColor={'grey'}
        style = {styles.SearchInput}
        /> */}
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    SearchWrapper: {
        
        
    },
    SearchInput: {
        marginTop: 30,
        backgroundColor: '#e1e3e6',
        width: Dimensions.get('window').width - 50,
        height: 50,
        marginLeft: 25,
        borderRadius: 10,
        paddingLeft: 20,
        justifyContent: 'center'
        
    },
    placeholderText: {
      color: 'grey',
      fontWeight: '600'
      
    },
})