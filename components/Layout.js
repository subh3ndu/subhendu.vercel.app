import Head from "next/head"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import Footer2 from "../sections/Footer2"
import { useState, useEffect } from "react"

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setVisible(false)
    }, 5000)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {visible ? <Footer /> : <Footer2 />}
    </div>
  )
}

export default Layout
