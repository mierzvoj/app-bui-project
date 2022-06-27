import { useEffect, useRef } from "react";
import "./Drawing.css";

function Drawing() {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null = null;
  const image = new Image();
  image.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Belarus_location_map.svg/1148px-Belarus_location_map.svg.png";
  image.onload = () => {
    if (ctx && canvas.current) {
      ctx.drawImage(image, 0, 0, canvas.current?.width, canvas.current?.height);
    }
  };

  useEffect(() => {
    const canvasEle = canvas.current;
    if (canvasEle) {
      canvasEle.width = canvasEle.clientWidth;
      canvasEle.height = canvasEle.clientHeight;
      ctx = canvasEle.getContext("2d");
    }
  }, []);

  useEffect(() => {
    const r1Info = { x: 20, y: 30, w: 100, h: 50 };
    const r1Style = { borderColor: "red", borderWidth: 10 };
    drawRect(r1Info, r1Style);

    const r2Info = { x: 100, y: 100, w: 80, h: 150 };
    const r2Style = { borderColor: "magenta", borderWidth: 15 };
    drawRect(r2Info, r2Style);

    const r3Info = { x: 250, y: 80, w: 80, h: 120 };
    drawFillRect(r3Info, { backgroundColor: "green" });

    const r4Info = { x: 200, y: 220, w: 100, h: 50 };
    drawFillRect(r4Info);

    drawCircle();
  }, []);

  // draw rectangle
  const drawRect = (
    info: { x: number; y: number; w: number; h: number },
    style: any = {}
  ) => {
    const { x, y, w, h } = info;
    const { borderColor = "blue", borderWidth = 15 } = style;

    if (ctx) {
      ctx.beginPath();
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = borderWidth;
      ctx.rect(x, y, w, h);
      ctx.stroke();
    }
  };

  // draw circle
  const drawCircle = (
    item: { x: number; y: number; r: number } = { x: 250, y: 250, r: 25 }
  ) => {
    if (ctx) {
      ctx.beginPath();
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 1;
      ctx.arc(item.x, item.y, item.r, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  const drawPoint = (item: { x: number; y: number } = { x: 0, y: 0 }) => {
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.lineWidth = 1;
      ctx.arc(item.x, item.y, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "black";
      ctx.strokeText(`x: ${item.x}, y: ${item.y}`, item.x + 10, item.y + 10);
    }
  };

  // draw rectangle with background
  const drawFillRect = (
    info: { x: number; y: number; w: number; h: number },
    style: any = {}
  ) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(x, y, w, h);
    }
  };

  return (
    <div className="drawing">
      <canvas
        ref={canvas}
        onClick={(e) => drawPoint({ x: e.clientX, y: e.clientY })}
      ></canvas>
    </div>
  );
}

export default Drawing;
