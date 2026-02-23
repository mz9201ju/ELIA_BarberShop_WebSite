import { useEffect, useRef } from 'react';
import { shouldEnableCustomCursor } from '../logic/cursor.js';

export default function BarberPoleCursor() {
    const cursorRef = useRef(null);
    const isEnabled = shouldEnableCustomCursor();

    useEffect(() => {
        if (!isEnabled || !cursorRef.current) {
            return undefined;
        }

        const cursor = cursorRef.current;
        const target = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
        const current = { ...target };
        const lerpAmount = 0.34;
        let frameId = 0;

        const animate = () => {
            current.x += (target.x - current.x) * lerpAmount;
            current.y += (target.y - current.y) * lerpAmount;

            cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
            frameId = window.requestAnimationFrame(animate);
        };

        const handlePointerMove = (event) => {
            target.x = event.clientX;
            target.y = event.clientY;
        };

        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        frameId = window.requestAnimationFrame(animate);

        return () => {
            window.cancelAnimationFrame(frameId);
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, [isEnabled]);

    if (!isEnabled) {
        return null;
    }

    return (
        <div ref={cursorRef} className="barber-cursor" aria-hidden="true">
            <span className="barber-cursor__cap barber-cursor__cap--top" />
            <span className="barber-cursor__pole" />
            <span className="barber-cursor__cap barber-cursor__cap--bottom" />
        </div>
    );
}
