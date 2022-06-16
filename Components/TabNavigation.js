
import { View, Text, useWindowDimensions} from 'react-native'
import React,{useContext,useState} from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import { NewsContext } from '../API/Context';
import HomeScreen from '../Screens/HomeScreen';
import NewsScreen from '../Screens/NewsScreen';
import TopNavigationBar from './TopNavigationBar';
import HeadlineSingleNews from '../Screens/HeadlineSingleNews';
import StackNavHolder from '../Screens/StackNavHolder';



const TabNavigation = () => {

    const layout = useWindowDimensions();

    const {index,setIndex, HeadlineSingleNewsEnabled, SearchScreenEnabled,
      BookmarkScreenEnabled,currentNewsItem} = useContext(NewsContext)
    

    //Creating routes for Top tab Navigation

    const [routes] = useState([
        {key: "first", title: "StackNavHolder"},
        {key: "second", title: "News"},
       
    ])

    const renderScene = SceneMap({
        first: StackNavHolder,
        second: NewsScreen,
        

    })


  return (
    <TabView 
    navigationState={{index,routes}}
    renderScene = {renderScene}
    onIndexChange = {setIndex}
    initialLayout = {{width: layout.width}}
    
    renderTabBar = {() => (HeadlineSingleNewsEnabled == 0 && SearchScreenEnabled == 0 && BookmarkScreenEnabled == 0) && (<TopNavigationBar index = {index} setIndex = {setIndex} item = {currentNewsItem} /> )}
    />
  )
}

export default TabNavigation