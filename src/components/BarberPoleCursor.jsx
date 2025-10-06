import { useEffect, useState } from "react";
import barberPole from "../assets/barberpole.png";

export default function BarberPoleCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <img
            src={barberPole}
            alt="barberPole Cursor"
            style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                width: "40px",
                height: "40px",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                transition: "transform 0.05s ease-out",
            }}
        />
    );
}
