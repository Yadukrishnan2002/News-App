import axios from "axios";
import react,{useEffect,useState} from "react";
import { createContext } from "react";

export const NewsContext = createContext();

const Context = ({children}) => {

    const [index,setIndex] = useState(0)
    const [TopHeadlines, setTopHeadlines] = useState([])
    const [News,setNews] = useState([])
    const [category,setCategory] = useState('general')
    const [source, setSource] = useState()
    const [currentHeadline,setCurrentHeadline] = useState([])
    const [Bookmarks,setBookmarks] = useState([])
    const [currentNewsItem,setCurrentNewsItem] = useState([])
    const [darkTheme, setDarkTheme] = useState(false)

    const [HeadlineSingleNewsEnabled, setHeadlineSingleNewsEnabled] = useState(0)
    const [SearchScreenEnabled, setSearchScreenEnabled] = useState(0)
    const [BookmarkScreenEnabled, setBookmarkScreenEnabled] = useState(0)

    

   
    const fetchTopHeadlines = async () => {
       const {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=56bc1062035e4ce5985d673113cb04cc")
       setTopHeadlines(data)
   
        
    }

    const fetchNews = async () => {
        const {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey=56bc1062035e4ce5985d673113cb04cc")
        setNews(data)
        setIndex(1)
        
    }

    const fetchNewsFromSource = async () => {
        
        try{
            const {data} = await axios.get("https://newsapi.org/v2/top-headlines?sources="+source+"&apiKey=56bc1062035e4ce5985d673113cb04cc")
            setNews(data)
            setIndex(1)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        fetchTopHeadlines();
    },[])

    useEffect(() => {
        fetchNews()
    },[category])

    useEffect(() => {
        fetchNewsFromSource()
    },[source])

    

    return <NewsContext.Provider value={{index,setIndex,TopHeadlines,category,setCategory,
        News,setSource,setNews,setCurrentHeadline,currentHeadline,setHeadlineSingleNewsEnabled
        ,HeadlineSingleNewsEnabled,SearchScreenEnabled,setSearchScreenEnabled,
        setBookmarkScreenEnabled,BookmarkScreenEnabled,currentNewsItem,setCurrentNewsItem,
        Bookmarks,setBookmarks, darkTheme, setDarkTheme
    }}>{children}</NewsContext.Provider>


}

export default Context