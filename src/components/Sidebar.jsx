import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth-data')

    navigate('/login')
  }

  return (
    <aside className='w-40 flex flex-col bg-emerald-500'>
      <h1 className='flex justify-center py-10 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store w-14 h-14 animate-bounce" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 21l18 0" />
          <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
          <path d="M5 21l0 -10.15" />
          <path d="M19 21l0 -10.15" />
          <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
        </svg>
      </h1>

      <div className='text-white flex flex-col justify-start items-center p-0 h-screen'>
        <div className="flex flex-col items-center gap-2">
          <div className="text-xl">Bienvenid@</div>
          <div className="text-xl font-bold">Invitado</div>
          <img src={`https://robohash.org/tu-usuario`} className="w-24 rounded-full bg-emerald-400 border-8 border-emerald-500/60" />
        </div>
        
        <div className="flex flex-col items-center my-20 gap-5">
          <Link
            to="/"
            className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
            Home
          </Link>

          <Link
            to="/products"
            className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
            Productos
          </Link>

          <Link
            to="/profile"
            className="py-2.5 px-4 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
            Ver perfil
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center mb-4">
        <button onClick={handleLogout} className='text-white text-sm flex items-center cursor-pointer p-3 hover:bg-rose-500 rounded-full'>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </button>
      </div>

    </aside>
  )
}

export default Sidebar