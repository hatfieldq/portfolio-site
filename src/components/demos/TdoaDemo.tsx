import { useRef, useState, useEffect } from "react";

type Point = {x: number; y: number}

const WIDTH = 600
const HEIGHT = 400

export default function TdoaDemo() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [sensors, setSensors] = useState<Point[]>([
        { x:100, y:100 }, 
        { x:500, y:120 }, 
        { x:300, y:350 },
    ])
    const [emitter, setEmitter] = useState<Point | null>(null)


    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, WIDTH, HEIGHT)

        for (const s of sensors) {
            // draw circle
        }
    }, [sensors])

    return(
        <canvas ref={canvasRef} width={WIDTH} height = {HEIGHT}
            className="border rounded bg-white touch-none" />
    )
}

