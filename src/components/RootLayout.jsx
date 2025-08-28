
import { Outlet } from 'react-router'
import Header from './Header'
export default function RootLayout({footer}) {
  return (
    <div>
        <Header/>
        <Outlet/>
        <footer className='bg-gray-200 p-7 mt-20'>{footer}</footer>
    </div>
  )
}
