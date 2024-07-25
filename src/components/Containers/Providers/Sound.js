import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react'
import { Howl } from 'howler'
import bgMusic from '../../../assets/sounds/backgrounds/sound.mp3'

// Tạo instance của Howl với tệp âm thanh
const createSound = () => {
    return new Howl({
        src: [bgMusic],
        loop: true, // Nếu bạn muốn âm thanh lặp lại
        autoplay: true,
        volume: 0.2, // Đặt âm lượng ban đầu
    })
}

// Tạo context cho âm thanh
const SoundContext = createContext(null)
const useSoundContext = () => {
    const value = useContext(SoundContext)
    return value
}
const SoundProvider = ({ children }) => {
    // Tạo ref của animationFrame
    const animationRef = useRef()
    // Tạo instance của Howl chỉ một lần bằng useMemo
    const sound = useMemo(() => createSound(), [])

    useEffect(() => {
        // Bắt đầu phát âm thanh nền khi component được mount

        sound.play()

        // Thu thập dữ liệu waveform

        // Dừng âm thanh khi component bị unmount
        return () => {
            if (sound.playing) {
                sound.stop()
            }
            // Dừng request animation Frame khi unmount
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [sound])
    const surrounding3DMusic = () => {
        // Tạo hiệu ứng âm thanh 3d chạy qua lại
        let panning = -1
        let direction = 0.005 // Tốc độ panning
        const animate = () => {
            panning += direction
            if (panning >= 1 || panning <= -1) {
                direction = -direction // Đảo chiều khi đạt đến biên
            }
            sound.stereo(panning)
            animationRef.current = requestAnimationFrame(animate)
        }
        animate()
    }
    return <SoundContext.Provider value={{ sound }}>{children}</SoundContext.Provider>
}

export { SoundContext, SoundProvider, useSoundContext }
