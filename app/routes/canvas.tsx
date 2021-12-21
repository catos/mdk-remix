import React from "react"


const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
  ctx.fill()
}



export default function Canvas() {

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)



  React.useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }
    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    let frameCount = 0
    let animationFrameId = 0
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => { window.cancelAnimationFrame(animationFrameId) }
  }, [draw])

  return (
    <div>
      <h1>Hei</h1>
      <canvas style={{ backgroundColor: "cornflowerblue" }} ref={canvasRef}></canvas>
    </div>
  )

}