import "./App.css"

 const SeekBar=props=>{
    return(
        <div className="seek">
        <Filler perc={props.perc}/>
        </div>
    )
}

const Filler=props=>{
    return <div className="filler" style={{width:`${props.perc}%`}}/>
}

export default SeekBar