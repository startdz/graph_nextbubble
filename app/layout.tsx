import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import './global.css'

export const metadata = {
  title: 'Bubble Dribble',
  description: 'Bubble Dribble mantap'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="id">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
export default RootLayout