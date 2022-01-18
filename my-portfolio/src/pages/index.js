import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Nav'
import Landing from '../components/Landing'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle} />
          <Landing/>
        </>
    )
}

export default Home
