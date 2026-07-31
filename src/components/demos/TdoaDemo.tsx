'use client'

import { useRef, useState, useEffect } from "react";

type Point = {x: number; y: number}

function distance(a: Point, b: Point): number {
    const dist = Math.hypot(a.x - b.x, a.y - b.y)
    return dist
}

function rangeDiff(emitter: Point, sensor: Point, ref: Point): number {
    const range1 = distance(emitter, sensor)
    const range2 = distance(emitter, ref)
    const diff = range1 - range2
    return diff
}

function sensorAt(p: Point, sensors: Point[], radius = 10): number {
    return sensors.findIndex((s) => distance(s, p) <= radius)
}

function hyperbolaPoints(ref: Point, sensor: Point, delta: number): Point[] {
    const a = Math.abs(delta) / 2
    const c = distance(ref, sensor) / 2
    const b = Math.sqrt(Math.max(0, c**2 - a**2))
    
    const center = { x: (ref.x + sensor.x) / 2, y: (ref.y + sensor.y) / 2 }
    const angle = Math.atan2(sensor.y - ref.y, sensor.x - ref.x)
    const branch = delta < 0 ? 1 : -1
    const points: Point[] = []

    const STEPS = 120
    const T = 3
    for (let i = 0; i <= STEPS; i++) {
        const t = -T + (2 * T * i) / STEPS
        const lx = branch * a * Math.cosh(t)
        const ly = b * Math.sinh(t)
        points.push({
            x: center.x + lx * Math.cos(angle) - ly * Math.sin(angle), 
            y: center.y + lx * Math.sin(angle) + ly * Math.cos(angle),
        })
    }

    return points
}

const WIDTH = 700
const HEIGHT = 500

export default function TdoaDemo() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [sensors, setSensors] = useState<Point[]>([
        { x:100, y:100 }, 
        { x:500, y:120 }, 
        { x:300, y:350 },
    ])
    const [emitter, setEmitter] = useState<Point | null>(null)
    const [moveSensor, setMoveSensor] = useState<number | null>(null)


    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        const GRID = 60
        ctx.strokeStyle = '#e5e7eb'          // light gray (tailwind gray-200)
        ctx.lineWidth = 1
        ctx.beginPath()
        for (let x = 0; x <= WIDTH; x += GRID) { ctx.moveTo(x, 0); ctx.lineTo(x, HEIGHT) }  // verticals
        for (let y = 0; y <= HEIGHT; y += GRID) { ctx.moveTo(0, y); ctx.lineTo(WIDTH, y) }  // horizontals
        ctx.stroke()
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

            const ref = sensors[0]

            ctx.strokeStyle = 'blue'
            ctx.lineWidth = 2
            for (const s of sensors.slice(1)) {
                const delta = rangeDiff(emitter, s, ref)
                const pts = hyperbolaPoints(ref, s, delta)
                ctx.beginPath()
                pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)))
                ctx.stroke()
            }
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


    function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
        const p = toCanvasCoords(e)
        const idx = sensorAt(p, sensors)
        if (idx >= 0) {
            e.currentTarget.setPointerCapture(e.pointerId)
            setMoveSensor(idx)
        } else {
            setEmitter(p)
        }
    }

    function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
        if (moveSensor === null) return
        const p = toCanvasCoords(e)
        const clamped = { x: clamp(p.x, 0, WIDTH), y: clamp(p.y, 0, HEIGHT) }
        setSensors((prev) => prev.map((s, i) => (i === moveSensor ? clamped : s)))
    }

    function handlePointerUp(e: React.PointerEvent<HTMLCanvasElement>) {
        setMoveSensor(null)
    }

    function clamp(v: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, v))  
    
}


    return(
        <canvas ref={canvasRef} 
         onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}
        width={WIDTH} height = {HEIGHT}
        className={`border rounded bg-white touch-none block mx-auto max-w-full h-auto ${
        moveSensor !== null ? 'cursor-grabbing' : 'cursor-crosshair'
        }`} />
    )
}

