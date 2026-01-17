import type { Route } from "./+types/home";
import { useRef, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kuan's Blog | Digital Riso & Holographic Patterns" },
    { name: "description", content: "A personal blog and portfolio with risograph-style Japanese patterns and holographic foil effects" },
  ];
}

export default function Home() {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !containerRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized position (0 to 1)
      const xNorm = x / rect.width;
      const yNorm = y / rect.height;

      // Calculate 3D rotation based on mouse position
      // Center is (0.5, 0.5), so we calculate offset from center
      const rotateY = (xNorm - 0.5) * 30; // -15 to +15 degrees
      const rotateX = (0.5 - yNorm) * 20; // -10 to +10 degrees (inverted for natural feel)

      // Update CSS custom properties for 3D transform
      cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
      cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
      cardRef.current.style.setProperty("--mouse-x", `${xNorm * 100}%`);
      cardRef.current.style.setProperty("--mouse-y", `${yNorm * 100}%`);
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      // Reset to flat when mouse leaves
      cardRef.current.style.setProperty("--rotate-x", "0deg");
      cardRef.current.style.setProperty("--rotate-y", "0deg");
      cardRef.current.style.setProperty("--mouse-x", "50%");
      cardRef.current.style.setProperty("--mouse-y", "50%");
    };

    const element = cardRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <main ref={containerRef} className="riso-container">
      {/* The 3D Foil Card */}
      <div ref={cardRef} className="foil-card">
        {/* Layer 1: Conic Gradient Triangle Pattern */}
        <div className="pattern-layer" aria-hidden="true" />
        
        {/* Layer 2: Riso Texture */}
        <div className="riso-texture" aria-hidden="true" />
        
        {/* Layer 3: Holographic Shine */}
        <div className="holographic-shine" aria-hidden="true" />
        
        {/* Layer 4: Multiply Overlay */}
        <div className="multiply-overlay" aria-hidden="true" />
        
        {/* Content */}
        <div className="content-layer">
          <h1 className="site-title">Hello, World</h1>
          <p className="site-subtitle">Tilt the card to see the holographic effect</p>
        </div>
      </div>
    </main>
  );
}
