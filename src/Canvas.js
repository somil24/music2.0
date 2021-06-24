import {useRef,useEffect} from "react"
import "./canvas.css"
/*const Canvas=props=>{
    const canvasRef=useRef(null)


    const draw1=(ctx,fc)=>{
        ctx.beginPath()
        ctx.moveTo(0,ctx.canvas.height/2)

        for(let i=0;i<ctx.canvas.width;i++){
            ctx.lineTo(i,ctx.canvas.height/2+(Math.sin(i*0.07+fc)*30+Math.cos(i*0.18+fc)*30))
        }
        ctx.shadowOffsetY = 20;
        
        const grd = ctx.createLinearGradient(3, 65, 170, 89);
        grd.addColorStop(0, "#735D2C");
        grd.addColorStop(0.3, "#8E392D");
        grd.addColorStop(0.5,"#54212D");
        grd.addColorStop(0.9,"#A31A5C");
        grd.addColorStop(1,"#1D335F")

        ctx.strokeStyle=grd;
        ctx.stroke()

    }

    const draw2=ctx=>{
        ctx.beginPath()
        ctx.moveTo(0,ctx.canvas.height/2)

        for(let i=0;i<ctx.canvas.width;i++){
            ctx.lineTo(i,ctx.canvas.height/2+(Math.sin(i*0.07)*30+Math.cos(i*0.18)*30)+30)
        }
        const grd = ctx.createLinearGradient(3, 65, 170, 89);
        grd.addColorStop(0, "#735D2C");
        grd.addColorStop(0.3, "#8E392D");
        grd.addColorStop(0.5,"#54212D");
        grd.addColorStop(0.9,"#A31A5C");
        grd.addColorStop(1,"#1D335F")
        
                ctx.strokeStyle=grd;
        ctx.stroke()


    }
    

   

    useEffect(() => {
        const canvas=canvasRef.current
        const context =canvas.getContext("2d");
        
        //draw2(context)

        let frameCount = 0.01
        let animationFrameId
        
        const render = () => {
          frameCount+=0.01
          draw1(context, frameCount)
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw1])
    

    return <canvas ref={canvasRef} {...props} className="can" style={{width:"100vw",height:"12em"}}/>
}

export default Canvas */

const Canvas = props => {
  
    const canvasRef = useRef(null)
    
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath()
        ctx.moveTo(0,ctx.canvas.height/2)
        for(let i=0;i<ctx.canvas.width;i++){
            ctx.lineTo(i,ctx.canvas.height/2+(Math.sin(i*0.08+frameCount)*30+Math.cos(i*0.19+frameCount)*30))
        }
        ctx.shadowOffsetY = 20;
        
        const grd = ctx.createLinearGradient(3, 65, 170, 89);
        grd.addColorStop(0, "#735D2C");
        grd.addColorStop(0.3, "#8E392D");
        grd.addColorStop(0.5,"#54212D");
        grd.addColorStop(0.9,"#A31A5C");
        grd.addColorStop(1,"#1D335F")

        ctx.strokeStyle=grd;
        ctx.stroke()
        draw2(ctx,frameCount)
    }

    const draw2=(ctx,frameCount)=>{
        ctx.beginPath()
        ctx.moveTo(0,ctx.canvas.height/2)

        for(let i=0;i<ctx.canvas.width;i++){
          ctx.lineTo(i,ctx.canvas.height/2+(Math.sin(-i*0.08+frameCount +5)*40))
        }
        const grd = ctx.createLinearGradient(3, 65, 170, 89);
        grd.addColorStop(0, "#735D2C");
        grd.addColorStop(0.3, "#8E392D");
        grd.addColorStop(0.5,"#54212D");
        grd.addColorStop(0.9,"#A31A5C");
        grd.addColorStop(1,"#1D335F")
        
                ctx.strokeStyle=grd;
        ctx.stroke()
        draw3(ctx,frameCount)
    }

    const draw3=(ctx,frameCount)=>{
      ctx.beginPath()
      ctx.moveTo(0,ctx.canvas.height/2)

      for(let i=0;i<ctx.canvas.width;i++){
        ctx.lineTo(i,ctx.canvas.height/2+(Math.cos(i*0.3+frameCount+Math.PI/2)*30))
      }
      const grd = ctx.createLinearGradient(3, 65, 170, 89);
      grd.addColorStop(0, "#735D2C");
      grd.addColorStop(0.3, "#8E392D");
      grd.addColorStop(0.5,"#54212D");
      grd.addColorStop(0.9,"#A31A5C");
      grd.addColorStop(1,"#1D335F")
      
              ctx.strokeStyle=grd;
      ctx.stroke()


  }
   

    useEffect(() => {
      
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      
      let animationFrameId
      
      //Our draw came here
      let frameCount=0.01
      const render = () => {
        frameCount+=0.01
        draw(context, frameCount)
        
        animationFrameId = window.requestAnimationFrame(render)
      }
      if(props.start)
      render()
      
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    },[draw])
    
    return <canvas ref={canvasRef} {...props}/>
  }
  
  export default Canvas