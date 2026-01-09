
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface DrawingBoardProps {
  languageDir: 'rtl' | 'ltr';
}

const DrawingBoard = forwardRef<HTMLCanvasElement, DrawingBoardProps>(({ languageDir }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1e293b');
  const [lineWidth, setLineWidth] = useState(6);

  useImperativeHandle(ref, () => canvasRef.current!);

  const COLORS = [
    '#1e293b', '#ef4444', '#f97316', '#f59e0b', '#facc15', '#a3e635',
    '#22c55e', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6',
    '#d946ef', '#ec4899', '#78350f', '#71717a', '#cbd5e1', '#ffffff'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const displayWidth = container.clientWidth;
      const displayHeight = container.clientHeight;
      
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        // Save current state
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx && canvas.width > 0 && canvas.height > 0) {
           tempCtx.drawImage(canvas, 0, 0);
        }

        canvas.width = displayWidth;
        canvas.height = displayHeight;
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;

        // Restore if we have data
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
           ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width, canvas.height);
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [lineWidth, color]);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const { x, y } = getCoordinates(e);

    // Draw a "dot" immediately on start
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Reset path for potential dragging
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Prevent scrolling/default behavior
    if ('touches' in e && e.cancelable) e.preventDefault();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    canvasRef.current?.getContext('2d')?.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const { x, y } = getCoordinates(e);

    // Prevent scrolling while drawing
    if ('touches' in e && e.cancelable) e.preventDefault();

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div ref={containerRef} className="w-full h-full relative cursor-crosshair overflow-hidden touch-none">
      <canvas 
        ref={canvasRef} 
        onMouseDown={startDrawing} 
        onMouseUp={stopDrawing} 
        onMouseMove={draw} 
        onMouseLeave={stopDrawing} 
        onTouchStart={startDrawing} 
        onTouchEnd={stopDrawing} 
        onTouchMove={draw} 
        className="w-full h-full block bg-white" 
        style={{ touchAction: 'none' }} 
      />
      
      {/* Floating Toolbar - Expanded and Scrollable */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${languageDir === 'rtl' ? 'left-2 md:left-4' : 'right-2 md:right-4'} flex flex-col gap-1.5 md:gap-2 p-2 md:p-3 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 z-40 max-h-[85vh] overflow-y-auto custom-scrollbar`}>
        {COLORS.map(c => (
          <button 
            key={c} 
            onClick={() => setColor(c)} 
            className={`w-7 h-7 md:w-9 md:h-9 rounded-full border-2 transition-all transform hover:scale-110 active:scale-90 ${color === c ? 'border-blue-500 ring-2 ring-blue-100 scale-110' : 'border-gray-100 opacity-90'}`} 
            style={{ backgroundColor: c }} 
          />
        ))}
        <div className="h-px bg-gray-200 w-full my-1"></div>
        <button 
          onClick={clearCanvas} 
          className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-lg md:text-xl hover:bg-red-50 text-red-500 rounded-full transition-colors"
          title="Clear Canvas"
        >
          🗑️
        </button>
      </div>
    </div>
  );
});

// Added default export to fix "Module has no default export" error
export default DrawingBoard;
