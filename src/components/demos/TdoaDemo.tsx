'use client'

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
        ctx.fillStyle = 'green'

        for (const s of sensors) {
            ctx.beginPath()
            ctx.arc(s.x, s.y, 6, 0, 2 * Math.PI) 
            ctx.fill()
        }

        if (emitter) {
            ctx.beginPath()
            ctx.arc(emitter.x, emitter.y, 6, 0, 2 * Math.PI)
            ctx.fillStyle = 'red'
            ctx.fill()
        }
    }, [sensors, emitter])


    function toCanvasCoords(e: React.MouseEvent<HTMLCanvasElement>): Point {
        const canvas = e.currentTarget
        const rect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        }
    }

    function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
        const coords = toCanvasCoords(e)
        setEmitter(coords)
    }


    return(
        <canvas ref={canvasRef} onClick={handleClick} width={WIDTH} height = {HEIGHT}
            className="border rounded bg-white touch-none " />
    )
}

