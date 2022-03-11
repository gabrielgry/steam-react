import { useState } from 'react'
import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'
import Appbar from './components/Appbar'
import IconButton from './components/IconButton'
import Games from './pages/Games'
import {
  MdGames,
  MdOutlineGames,
  MdEmojiEvents,
  MdOutlineEmojiEvents,
  MdGroups,
  MdOutlineGroups,
  MdFeed,
  MdOutlineFeed,
} from 'react-icons/md'

function App() {
  const [state, setState] = useState(0)

  const handleChange = (event, value) => {
    setState(value)
  }

  return (
    <>
      <Appbar sticky>
        <IconButton onClick={() => console.log('Icon Clicked')}>
          <MdGames />
        </IconButton>
      </Appbar>
      <Navbar value={state} onChange={(event, value) => handleChange(event, value)}>
        <NavbarItem icon={<MdOutlineGames />} iconActive={<MdGames />}>
          Games
        </NavbarItem>
        <NavbarItem icon={<MdOutlineEmojiEvents />} iconActive={<MdEmojiEvents />}>
          Archivements
        </NavbarItem>
        <NavbarItem icon={<MdOutlineGroups />} iconActive={<MdGroups />}>
          Friends
        </NavbarItem>
        <NavbarItem icon={<MdOutlineFeed />} iconActive={<MdFeed />}>
          News
        </NavbarItem>
      </Navbar>
      <Games />
    </>
  )
}

export default App
