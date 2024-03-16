import React, { useState, useEffect } from "react";
import CustomButton from "../UI/CustomButton";
import BackButton from "../UI/BackButton";
import { useNavigate } from "react-router-dom";
export default function Wheel() {
  const [list] = useState<string[]>([
    "1/2",
    "\u221A(5)/3",
    "3/4",
    "1/3",
    "\u221A(3)/2",
    "2\u00B2/5",
    "1",
    "2/3",
    "\u221A(8)/5",
  ]);
  const [radius, setRadius] = useState<number>(75); // Specify the type as 'number'
  const [rotate, setRotate] = useState<number>(0); // DEGREES
  const [easeOut, setEaseOut] = useState<number>(0); // SECONDS
  const [angle, setAngle] = useState<number>(0); // RADIANS
  const [top, setTop] = useState<number | null>(null); // INDEX
  const [offset, setOffset] = useState<number | null>(null); // RADIANS
  const [net, setNet] = useState<number | null>(null); // RADIANS
  const [result, setResult] = useState<number | null>(null); // INDEX
  const [spinning, setSpinning] = useState<boolean>(false);

  useEffect(() => {
    renderWheel();
  }, [list]);

  const renderWheel = () => {
    const numOptions = list.length;
    const arcSize = (2 * Math.PI) / numOptions;
    setAngle(arcSize);

    topPosition(numOptions, arcSize);

    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      const text = list[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  };

  const topPosition = (num: number, angle: number) => {
    let topSpot: number | null = null;
    let degreesOff: number | null= null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    topSpot && setTop(topSpot - 1);
    setOffset(degreesOff);
  };

  const renderSector = (
    index: number,
    text: string,
    start: number,
    arc: number,
    color: string
  ) => {
    const canvas = document.getElementById("wheel") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const startAngle = start;
    const endAngle = start + arc;
    const angle = index * arc;
    const baseSize = radius * 3.33;
    const textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  const getColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  };

  const spin = () => {
    const randomSpin = Math.floor(Math.random() * 900) + 500;
    setRotate(randomSpin);
    setEaseOut(2);
    setSpinning(true);

    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

  const getResult = (spin: number) => {
    const netRotation = ((spin % 360) * Math.PI) / 180;
    let travel = netRotation + offset!;
    let count = top! + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    setNet(netRotation);
    setResult(result);
  };

  const reset = () => {
    setRotate(0);
    setEaseOut(0);
    setResult(null);
    setSpinning(false);
  };
  const navigation = useNavigate();
  return (
    <div className="App">
      <BackButton
        onClick={() => navigation(`/my-wheel`)}
        text="Back"
      ></BackButton>
      <h1>Spinning 🥃 Wheel</h1>
      <div className="display">
        <span id="readout">
          YOU WON:{"  "}
          <span id="result">{result !== null ? list[result] : ""}</span>
          {"  "}SHOTS
        </span>
      </div>
      {spinning ? (
        <CustomButton onClick={() => reset()} text="reset"></CustomButton>
      ) : (
        <CustomButton onClick={() => spin()} text="SPIN!"></CustomButton>
      )}

      <span id="selector">&#9660;</span>
      <canvas
        id="wheel"
        width="500"
        height="500"
        style={{
          WebkitTransform: `rotate(${rotate}deg)`,
          WebkitTransition: `-webkit-transform ${easeOut}s ease-out`,
        }}
      />
    </div>
  );
}
