export default function Header() {
  const navLinks = ['About', 'Projects', 'Contact'];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <a href='#home' className='text-2xl font-bold text-cyan-400'>Portfolio</a>
          </div>
          <nav className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}