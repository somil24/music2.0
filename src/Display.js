import "./App.css"
import Canvas from "./Canvas"
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SystemUpdateAltOutlinedIcon from '@material-ui/icons/SystemUpdateAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import FastForwardIcon from '@material-ui/icons/FastForward';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined';
import { IconButton } from "@material-ui/core";

import {useRef,useState,useEffect} from "react"
export default function Display(props){
    const audio=useRef();
    const [isPlaying,setIsPlaying]=useState(false);
    
    useEffect(()=>{
        isPlaying?audio.current.play() : audio.current.pause();
        //console.log(audio.current.duration)
    },[isPlaying]);

    const SkipSong = (forwards=true)=>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp=props.currentSongIndex;
                return(++temp%props.length)      
            })
        }else {
            props.setCurrentSongIndex(()=>{
                let temp=props.currentSongIndex;
                return(Math.abs(--temp)%props.length)      
            })
            
        }         
    }  
    
    return(
        <div className="display">
            <div className="image">
                <img src={props.src} alt="mirror"></img>
            </div>
            <div className="icons">
           <FavoriteBorderOutlinedIcon style={{color:"#723A85" ,margin:"1em"}}/>
           <SystemUpdateAltOutlinedIcon style={{color:"#723A85",margin:"1em"}}/>
           <ShareIcon style={{color:"#723A85",margin:"1em"}}/>
            </div>
            <div className="sineWave">
                <Canvas start={isPlaying}/>
            </div>
            <div className="songName">
            <h3>{props.title}</h3>
            <h4>{props.artist}</h4>
            </div>
            <div className="controls">
            <audio ref={audio} src={props.link}></audio>
            <IconButton style={{margin:"0 1em 0 1em"}}>
            <FastRewindIcon style={{color:"#BE81B1",fontSize:"2.1em"}} onClick={()=>SkipSong()} />
            </IconButton>
            
            <IconButton style={{margin:"0 1em 0 1em"}} onClick={()=>setIsPlaying(!isPlaying)}>
            {!isPlaying?
            <PlayArrowOutlinedIcon style={{fontSize:"3em",color:"white",borderRadius:"100%"}}/>:
            <PauseOutlinedIcon style={{fontSize:"3em",color:"white",borderRadius:"100%"}}/>}
            </IconButton>
            
            <IconButton style={{margin:"0 1em 0 1em"}}>
            <FastForwardIcon style={{color:"#BE81B1" ,fontSize:"2.1em"}} onClick={()=>SkipSong()}/>
            </IconButton>
            
            </div>
        </div>
    )
}