'use client'
import { useEffect, useState } from 'react'

export default function Countdown({ targetISO }) {
  const target = new Date(targetISO).getTime()
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    const t = setInterval(()=> setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const diff = Math.max(0, target - now)
  const sec = Math.floor((diff/1000)%60)
  const min = Math.floor((diff/1000/60)%60)
  const hr = Math.floor((diff/1000/60/60)%24)
  const days = Math.floor(diff/1000/60/60/24)

  const pad = (n) => String(n).padStart(2,'0')

  return (
    <div className="mt-6 hero-accent rounded-xl inline-flex items-center gap-4">
      <div className="countdown">
        <div className="unit">
          <div className="text-xs text-white/70">DAYS</div>
          <div className="text-2xl">{pad(days)}</div>
        </div>
        <div className="unit">
          <div className="text-xs text-white/70">HRS</div>
          <div className="text-2xl">{pad(hr)}</div>
        </div>
        <div className="unit">
          <div className="text-xs text-white/70">MINS</div>
          <div className="text-2xl">{pad(min)}</div>
        </div>
        <div className="unit">
          <div className="text-xs text-white/70">SECS</div>
          <div className="text-2xl">{pad(sec)}</div>
        </div>
      </div>
    </div>
  )
}
