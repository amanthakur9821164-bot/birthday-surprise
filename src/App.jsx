import Navigation from './components/Navigation'
import MusicButton from './components/MusicButton'
import Intro from './components/Intro'
import BirthdayCake from './components/BirthdayCake'
import Memories from './components/Memories'
import Story from './components/Story'
import ThingsILove from './components/ThingsILove'
import Reasons from './components/Reasons'
import LoveLetter from './components/LoveLetter'
import GiveWorld from './components/GiveWorld'
import EasterEggs from './components/EasterEggs'
import Surprise from './components/Surprise'
import FinalScreen from './components/FinalScreen'

export default function App() {
  const scrollToCake = () => {
    document.getElementById('cake')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-midnight">
      <Navigation />
      <MusicButton />

      <Intro onStart={scrollToCake} />
      <BirthdayCake />
      <Memories />
      <Story />
      <ThingsILove />
      <Reasons />
      <LoveLetter />
      <GiveWorld />
      <EasterEggs />
      <Surprise />
      <FinalScreen />
    </div>
  )
}
