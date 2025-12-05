export default function Footer() {
  return (
    <footer className='bg-gray-900 border-t border-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Sisay Melese. All Rights Reserved.</p>
      </div>
    </footer>
  );
}