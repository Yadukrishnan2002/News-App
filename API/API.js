export const categories = [
    {
      
      pic: "https://img.icons8.com/fluent/96/000000/news.png",
      name: "General",
      apiName: 'general',
    },
    
    {
      
      pic: "https://img.icons8.com/color/96/undefined/combo-chart--v1.png",
      name: "Business",
      apiName: 'business',
    },
    {
        pic: "https://img.icons8.com/external-becris-flat-becris/100/undefined/external-technology-literary-genres-becris-flat-becris.png",
        name: "Technology",
        apiName: 'technology',
    },
    
    {
      pic: "https://img.icons8.com/color/96/undefined/clinic.png",
      name: "Health",
      apiName: 'health',
    },
    {
      pic: "https://img.icons8.com/color/96/undefined/laboratory.png",
      name: "Science",
      apiName: 'science',
    },
    {
      pic: "https://img.icons8.com/color-glass/96/undefined/trophy.png",
      name: "Sports",
      apiName: 'sports',
    },
    {
       
        pic: "https://img.icons8.com/color/96/undefined/movie-projector.png",
        name: "Entertainment",
        apiName: 'entertainment',
    },

    {
       
        pic: "",
        name: "",
    },
   
   
  ];
  
  export const country = [
    {
      code: "in",
      name: "India",
    },
    {
      code: "us",
      name: "USA",
    },
    {
      code: "au",
      name: "Australia",
    },
    {
      code: "ru",
      name: "Russia",
    },
    {
      code: "fr",
      name: "France",
    },
    {
      code: "gb",
      name: "United Kingdom",
    },
  ];
  
  export const sources = [
    {
      id: "bbc-news",
      name: "BBC News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
      picId: "1pItT5WZ2nI8m5OM-HVHxEKu7Px9GeVHy"
    },
    {
      id: "cnn",
      name: "CNN",
      pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
      picId: "1RtN7UhSgiB8oIPSakbzn7jSPfAXggKLm"
    },
    {
      id: "fox-news",
      name: "Fox News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
      picId: "18gvnBAk-mKEP7cb5Jksmh1gLgdHSqdu3"
    },
    {
      id: "google-news",
      name: "Google News",
      pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
      picId: "11N5S0wPjTpRtollHkN1bBOTDCxtuOm0H"
    },
    {
        id: "NDTV-news",
        name: "NDTV News",
        pic: "https://commons.wikimedia.org/wiki/File:NDTV_logo.svg#/media/File:NDTV_logo.svg",
        picId: "1jlixI1bK3gQccGtZSQMr8x6wb6b2MUy5"
    },
    {
        id: "Indian-Express",
        name: "Indian Express",
        picId: "1wBEWolSy11jEhuOR_JuZors4tv1i9U6q"

    },
    {
        id: "the-times-of-india",
        name: "Times Of India",
        picId: "1o_40QtL6e_rSduybG7z3A9OPHN0v3G91"
    },
    {
        id: "test",
        name: "",
        picId: ""
    }
  ];


  export const API_KEY = "56bc1062035e4ce5985d673113cb04cc"

  export const getNews = (category, country = "in") => {
      return `https://newsapi.org/v2/top-headlines?country=in&apiKey=56bc1062035e4ce5985d673113cb04cc`
  }