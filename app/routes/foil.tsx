import type { Route } from "./+types/foil";
import { useRef, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Holographic Foil Card" },
    {
      name: "description",
      content: "A Holographic Foil version of the pattern",
    },
  ]
}

export default function Foil() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Normalized position (0-1)
      const xNorm = x / rect.width
      const yNorm = y / rect.height
      
      // Update holographic gradient position
      containerRef.current.style.setProperty("--mouse-x", `${xNorm * 100}%`)
      containerRef.current.style.setProperty("--mouse-y", `${yNorm * 100}%`)
    }

    const element = containerRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <main className="riso-container">
      <div ref={containerRef} className="foil-card">
        <div className="pattern-layer"></div>
        <div className="riso-texture"></div>
        <div className="holographic-shine"></div>
        <div className="multiply-overlay"></div>
        <div className="content-layer">
          <h1 className="site-title">Holographic Foil</h1>
          <p className="site-subtitle">Move cursor to see effect</p>
        </div>
      </div>
    </main>
  )
}
