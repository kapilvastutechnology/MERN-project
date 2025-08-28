
import { Outlet } from 'react-router'
import Header from './Header'
export default function RootLayout({footer}) {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
