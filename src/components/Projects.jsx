export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and contact info.",
      image: "/portfolio.jpg", // Replace with screenshot path
      link: "https://github.com/ankurkarn7/", // Replace with GitHub/Live link
    },
    {
      title: "To-Do List App",
      description: "A simple task management app built with React for adding, editing, and deleting tasks.",
      image: "/todolist.jpg", // Replace with screenshot path
      link: "https://notes-app-one-smoky.vercel.app/", // Replace with GitHub/Live link
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-gray-400 mb-12">
          Here are some of the projects I have worked on recently.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
