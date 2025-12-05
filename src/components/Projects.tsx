const projects = [
  {
    title: 'Fintech Application',
    description: 'A web app for personal finance management.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/250dcb51-81d0-4fda-a0d0-40229cb547d5/project-1-7iadnu4-1764936468433.webp',
  },
  {
    title: 'Social Media App',
    description: 'A mobile app for connecting with friends.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/250dcb51-81d0-4fda-a0d0-40229cb547d5/project-2-hlwp9cp-1764936474576.webp',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'A data visualization platform for business intelligence.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/250dcb51-81d0-4fda-a0d0-40229cb547d5/project-3-flc8e37-1764936482832.webp',
  },
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 sm:py-32 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-center mb-12 text-cyan-400'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.title} className='bg-gray-800 rounded-lg overflow-hidden group'>
              <img src={project.imageUrl} alt={project.title} className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300' />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2 text-white'>{project.title}</h3>
                <p className='text-gray-400'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}