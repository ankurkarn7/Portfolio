export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text column */}
        <div className="w-full text-center ">
          <p className="text-sm uppercase tracking-wider text-indigo-400">Hi, my name is</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif">
            ANKUR KARN
          </h1>
          <p className="mt-4 text-lg text-gray-300 ">
            Aspiring SDE | Web Developer | Problem Solver
          </p>

          <div className="text-2xl mt-10">
            Passionate about crafting seamless digital experiences through clean code and modern design.
          </div>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500"
            >
              Resume
            </a>
          </div>


          {/* Social Links */}
          <div className="mt-10 flex justify-center gap-6 text-lg">
            <a
              href="https://github.com/ankurkarn7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankurkarn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ankurkarn2004@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
