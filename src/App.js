import Display from "./Display"
import './App.css';
import {useState,useEffect} from "react"
function App() {

  const [songs,setSong]=useState(
    [
      {
        title:"Mirror",
        artist:"Justin Timberlake",
        img_src:'https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/13942619/original/crop:x0y0w600h600/hash:1463963289/1367354310_JT_-_Mirrors.png?1463963289',
        src:"https://www.hitstreet.net/download/Justin_Timberlake_-_Mirrors.mp3",
        alt:"mirror"
      },
      {
      title:"Hotel California",
      artist:"The Eagle",
      img_src:'https://i.pinimg.com/originals/08/47/95/0847954cfba8f72a045c1b6dbde07589.jpg',
      src:"https://ia800504.us.archive.org/33/items/HotelCalifornia_140/Eagles-HellFreezesOver-HotelCalifornia0.mp3",
      alt:"hotel"
    },
    {
      title:"New Kid in Town",
      artist:"The Eagle",
      img_src:"https://upload.wikimedia.org/wikipedia/en/5/5d/Eaglesnewkidintownsinglecover.jpg",
      src:"https://archive.org/download/theeagles_201903/The%20Eagles%20-%20New%20Kid%20in%20Town%20%281977%29.mp3",
      alt:"New Kid"

    }
    ]
  )

  const [currentSongIndex,setCurrentSongIndex]=useState(0);
  const [nextSongIndex,setNextSongIndex]=useState(currentSongIndex+1);
  
   useEffect(()=>{
     setNextSongIndex(()=>{
       return (currentSongIndex+1)%(songs.length)
     })
   },[currentSongIndex])
  

  return (
    <div className="App">
    <Display currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} src={songs[currentSongIndex].img_src} length={songs.length} title={songs[currentSongIndex].title} artist={songs[currentSongIndex].artist}
      link={songs[currentSongIndex].src}
    />
    
    </div>
  );
}

export default App;
