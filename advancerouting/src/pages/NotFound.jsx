import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    const overlay = document.getElementById("overlay");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const pos = `${x}px ${y}px`;
      overlay.style.maskImage = `radial-gradient(circle 120px at ${pos}, transparent 0%, black 150px)`;
      overlay.style.webkitMaskImage = overlay.style.maskImage;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-bold mb-4 ">Page Not Found</h1>
        <div className="mb-30">
        <p className="text-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
</div>
      </div>

      {/* Overlay with spotlight mask */}
      <div
        id="overlay"
        className="absolute inset-0 bg-black z-20 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)",
          WebkitMaskImage:
            "radial-gradient(circle 120px at 50% 50%, transparent 0%, black 150px)",
        }}
      ></div>
    </div>
  );
}



