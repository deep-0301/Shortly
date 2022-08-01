import React from 'react';
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import StartPage from '../components/StartPage'
import Statics from '../components/Statics'

export default function Home() {

  return (
    <>
      <Navbar />
      <HomePage />
      <Search />
      <Statics />
      <StartPage />
      <Footer />
    </>
  )
}
