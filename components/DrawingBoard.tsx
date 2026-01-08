
import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const DrawingBoard = forwardRef<HTMLCanvasElement>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1e293b');
  const [lineWidth, setLineWidth] = useState(6);

  useImperativeHandle(ref, () => canvasRef.current!);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        // Save content to avoid losing drawing on resize
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx && canvas.width > 0 && canvas.height > 0) {
          tempCtx.drawImage(canvas, 0, 0);
        }

        canvas.width = displayWidth;
        canvas.height = displayHeight;

        // Re-set context properties after width/height change as they get reset
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // Restore content, scaled to fit if the window changed
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
          ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, canvas.width, canvas.height);
        }
      }
    };

    // Initial resize to sync CSS and internal resolution
    resizeCanvas();

    // Use ResizeObserver for more reliable updates than just window resize events
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current?.getContext('2d');
    ctx?.beginPath();
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      // Prevent scrolling while drawing on touch devices
      if (e.cancelable) e.preventDefault();
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    // Map screen coordinates to the internal canvas resolution precisely
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="w-full h-full relative cursor-crosshair overflow-hidden">
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
      
      {/* Canvas Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100">
        <div className="flex flex-col gap-2">
          {['#1e293b', '#ef4444', '#3b82f6', '#10b981', '#f59e0b'].map(c => (
            <button 
              key={c}
              onClick={() => setColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? 'border-blue-500 scale-125' : 'border-transparent'}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="h-px bg-gray-200 my-1"></div>
        <button 
          onClick={clearCanvas}
          className="text-gray-500 hover:text-red-500 p-1 transition-colors"
          title="מחק הכל"
        >
          <span className="text-xl">🗑️</span>
        </button>
      </div>
    </div>
  );
});

export default DrawingBoard;
