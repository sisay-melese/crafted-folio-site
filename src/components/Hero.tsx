export default function Hero() {
  return (
    <section id='home' className='relative h-screen flex items-center justify-center text-center' style={{backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/250dcb51-81d0-4fda-a0d0-40229cb547d5/hero-background-fxr8x6l-1764936461861.webp)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
       <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='relative z-10 p-4'>
        <h1 className='text-5xl md:text-7xl font-extrabold text-white leading-tight'>
          Sisay Melese
        </h1>
        <p className='mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto'>
          Passionate Software Engineer from Ethiopia, Crafting Modern Web Experiences.
        </p>
        <a href='#projects' className='mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out'>
          View My Work
        </a>
      </div>
    </section>
  );
}