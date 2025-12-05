export default function About() {
  const skills = ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'Supabase'];

  return (
    <section id='about' className='py-20 sm:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400'>About Me</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='prose prose-lg text-gray-300'>
            <p>
              Hello! I'm a software engineer from Nairobi, Ethiopia, with a passion for building beautiful and functional web applications. I specialize in the frontend, bringing ideas to life with clean code and great user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring the vibrant tech scene in Nairobi, contributing to open-source projects, or enjoying a cup of Kenyan coffee.
            </p>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-4'>My Skills</h3>
            <div className='flex flex-wrap gap-3'>
              {skills.map(skill => (
                <span key={skill} className='bg-gray-800 text-cyan-400 px-4 py-2 rounded-full font-medium'>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}