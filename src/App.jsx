import { useState } from 'react'
import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'
import Appbar from './components/Appbar'
import Paginator from './components/Paginator'
import Logo from './components/Logo'
import Avatar from './components/Avatar'
import Games from './pages/Games'
import Achievements from './pages/Achievements'

import {
  MdGames,
  MdOutlineGames,
  MdEmojiEvents,
  MdOutlineEmojiEvents,
  MdGroups,
  MdOutlineGroups,
  MdFeed,
  MdOutlineFeed,
  MdOutlineAccountCircle,
} from 'react-icons/md'
import { FaSteam } from 'react-icons/fa'

function App() {
  const [page, setPage] = useState(0)

  const handleChange = (event, value) => {
    setPage(value)
  }

  return (
    <>
      <Appbar sticky>
        <Logo icon={<FaSteam />}>Steam</Logo>
        <Avatar placeholderIcon={<MdOutlineAccountCircle />} />
      </Appbar>
      <Navbar value={page} onChange={(event, value) => handleChange(event, value)}>
        <NavbarItem icon={<MdOutlineGames />} iconActive={<MdGames />}>
          Games
        </NavbarItem>
        <NavbarItem icon={<MdOutlineEmojiEvents />} iconActive={<MdEmojiEvents />}>
          Achievements
        </NavbarItem>
        <NavbarItem icon={<MdOutlineGroups />} iconActive={<MdGroups />}>
          Friends
        </NavbarItem>
        <NavbarItem icon={<MdOutlineFeed />} iconActive={<MdFeed />}>
          News
        </NavbarItem>
      </Navbar>
      <Paginator page={page}>
        <Games />
        <Achievements />
        <Games />
        <Games />
      </Paginator>
    </>
  )
}

export default App
