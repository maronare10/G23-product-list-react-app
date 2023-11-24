import {Link, Outlet} from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function LayoutBase() {
  return (
    <div className="flex h-screen font-sans">
      <Sidebar/>
      <main className="flex justify-center w-screen overflow-y-auto bg-gray-100">
        <Outlet/>
      </main>

    </div>
  )
}

export default LayoutBase