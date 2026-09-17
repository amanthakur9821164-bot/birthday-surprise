import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

const MUSIC_SRC = '/music/birthday.mp3'

export default function MusicButton() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC)
    audio.loop = true
    audio.volume = 0.4
    audio.addEventListener('error', () => setUnavailable(true))
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio || unavailable) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setUnavailable(true))
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Turn music off' : 'Turn music on'}
      disabled={unavailable}
      title={unavailable ? 'Add /public/music/birthday.mp3 to enable music' : undefined}
      className="fixed bottom-5 right-5 z-40 glass-card rounded-full p-3 text-cream hover:text-gold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  )
}
