import React, { useEffect, useMemo, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import introSound from "../../assets/sounds/backgrounds/sound.mp3";
import BouncingText from "../Animations/AnimatedCharacters/bouncingText";

const maxIntroTime = 30000;

function IntroOverlay({ setIsLoading }) {
  const [time, setTime] = useState(maxIntroTime);
  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const fadeInRef = useRef(null);
  const fadeOutRef = useRef(null);
  const timeIntervalRef = useRef(null);
  const canvasRef = useRef(null);
  const analyserRef = useRef(null);
  const animationIdRef = useRef(null);
  const audioSourceRef = useRef(null);

  const sound = useMemo(
    () =>
      new Howl({
        src: [introSound],
        html5: true,
        autoplay: true,
        loop: true,
        volume: 0,
        onunlock: () => {},
      }),
    []
  );

  // Tăng dần âm lượng khi start
  useEffect(() => {
    if (isStart && sound) {
      fadeInRef.current = setInterval(() => {
        if (sound.volume() < 1) {
          sound.volume(sound.volume() + 0.1);
        } else {
          clearInterval(fadeInRef.current);
        }
      }, 500);
    }
    return () => clearInterval(fadeInRef.current);
  }, [isStart, sound]);

  // Giảm dần âm lượng khi gần hết intro
  useEffect(() => {
    if (isStart) {
      if (time <= 5000 || isStop) {
        clearInterval(fadeInRef.current); // Dừng tăng âm lượng
        fadeOutRef.current = setInterval(() => {
          const newVolume = Math.max(0, sound.volume() - 0.1);
          sound.volume(newVolume);
          if (newVolume <= 0) {
            clearInterval(fadeOutRef.current);
          }
        }, 500);
      }
    }
    return () => clearInterval(fadeOutRef.current);
  }, [time, isStart, isStop, sound]);

  // Kết thúc intro
  useEffect(() => {
    if (time <= 0) {
      sound.stop();
      // Do hàm này nên mất âm thanh sửa giúp tôi
      if (analyserRef.current) {
        analyserRef.current.disconnect();
      }
      setIsLoading(false);
    }
  }, [sound, time, setIsLoading]);

  // Time Effect
  useEffect(() => {
    if (isStart) {
      timeIntervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1000);
      }, 1000);
    }
    return () => clearInterval(timeIntervalRef.current);
  }, [isStart]);

  // draw canvas
  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const analyser = analyserRef.current;

    if (!ctx || !analyser) return;

    // Creating output array (according to documentation https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
    analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    // Get the Data array
    analyser.getByteTimeDomainData(dataArray);

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const sliceWidth = canvasWidth / bufferLength;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 255, 0)";
    ctx.beginPath();

    for (let i = 0; i < bufferLength; i++) {
      const x = i * sliceWidth;
      const v = dataArray[i] / 128.0 - 1;
      const y = canvasHeight / 2 + (canvasHeight * v) / 2;
      const color = Math.floor((255 * (v + 1)) / 2);
      ctx.strokeStyle = `rgb(${color}, ${255 - color}, 0)`;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  };

  const updateWaveform = () => {
    drawWaveform();
    animationIdRef.current = requestAnimationFrame(updateWaveform);
  };

  useEffect(() => {
    if (sound && !analyserRef.current) {
      const analyser = Howler.ctx.createAnalyser();
      analyserRef.current = analyser;

      if (!audioSourceRef.current) {
        audioSourceRef.current = Howler.ctx.createMediaElementSource(
          sound._sounds[0]._node
        );
        // audioSourceRef.current.disconnect();
        audioSourceRef.current.connect(analyser);
        analyser.connect(Howler.ctx.destination);
      }
    }
    return () => {
      cancelAnimationFrame(animationIdRef.current);
    };
  }, [sound]);

  const handleStart = () => {
    if (!sound.playing()) {
      sound.play();
      setIsStart(true);
      updateWaveform(); // Bắt đầu vẽ sóng âm thanh
    }
  };

  const handleStop = () => {
    if (sound.playing()) {
      setIsStop(true);
      setTime(5000); // set time về 5s
    }
  };

  return (
    <div className="h-screen w-screen bg-black">
      <div className="text-white text-2xl font-semibold">
        LOADING
        <BouncingText
          className="text-white text-2xl font-semibold"
          text={" ..."}
          displacement={10}
          duration={500}
          endTime={5000}
        />
      </div>
      <p className="text-white">{Math.floor(time / 1000)}</p>
      <canvas
        ref={canvasRef}
        id="waveformCanvas"
        width="800"
        height="200"
      ></canvas>
      <div
        className="text-white p-2 bg-purple-500 border-1 cursor-pointer"
        onClick={handleStart}
      >
        Press to start
      </div>
      <div
        className="text-white p-2 bg-red-500 border-1 cursor-pointer"
        onClick={handleStop}
      >
        Press to stop
        {isStop && (
          <div className="text-white">
            {"Intro stop in " + Math.floor(time / 1000)}
          </div>
        )}
      </div>
    </div>
  );
}

export default IntroOverlay;
