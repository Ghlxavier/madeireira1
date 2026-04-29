import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="flex items-center space-x-3 hover:no-underline">
              {/* Ajuste o src se o nome do arquivo da logo for diferente de 'logo.png' */}
              <Image 
                src="/logo/logo.png"
                alt="Logo Madeireira Xavier"
                width={180}
                height={70}
                className="h-12 w-auto lg:h-14 object-contain"
                priority
              />
              <span className="text-2xl lg:text-3xl font-bold text-green-800 whitespace-nowrap">Madeireira Xavier</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#home" className="text-gray-700 hover:text-green-800 font-medium transition">Home</Link>
            <Link href="#categorias" className="text-gray-700 hover:text-green-800 font-medium transition">Categorias</Link>
            <Link href="#servicos" className="text-gray-700 hover:text-green-800 font-medium transition">Serviços</Link>
            <Link href="#projetos" className="text-gray-700 hover:text-green-800 font-medium transition">Projetos</Link>
            <Link href="#contato" className="text-gray-700 hover:text-green-800 font-medium transition">Contato</Link>
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-gray-100 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Home</Link>
            <Link href="#categorias" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Categorias</Link>
            <Link href="#servicos" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Serviços</Link>
            <Link href="#projetos" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Projetos</Link>
            <Link href="#contato" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Contato</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header