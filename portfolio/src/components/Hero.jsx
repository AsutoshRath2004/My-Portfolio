import profileImage from "../assets/asutosh.jpg";

export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center container-padding pt-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <p className="text-blue-500 font-semibold">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Asutosh Rath
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300">
              CS Student & Full Stack Developer
            </h2>
            <p className="text-gray-400 max-w-lg">
              Passionate about developing efficient and scalable web applications, with expertise in MERN stack development and cloud technologies.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Contact Me
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://github.com/AsutoshRath2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/asutosh-rath-9ab282231/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/20 flex items-center justify-center overflow-hidden shadow-lg">
              <div className="absolute inset-0 border-2 border-blue-500/40 rounded-full animate-pulse"></div>
              <img className="object-cover w-full h-full" src={profileImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
  }