import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../sections/Footer'
import LoadingScreen from '../ui/LoadingScreen'
import { useLoading } from '../../context/LoadingContext'

const MainLayout = ({ children }) => {
  const { isLoading } = useLoading()

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout