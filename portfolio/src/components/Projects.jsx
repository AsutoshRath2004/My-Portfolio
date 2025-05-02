export default function Projects() {
    const projects = [
      {
        title: "VITAL - Nutrition Recommendation Website",
        description: "A MERN stack application providing personalized supplement recommendations with Redis caching and sentiment analysis for improved accuracy.",
        role: "Leader and Backend Developer",
        achievements: [
          "Engineered a MERN stack app providing 100+ personalized supplement recommendations.",
          "Optimized API performance, achieving a 60% reduction in user search time through Redis caching.",
          "Integrated sentiment analysis, improving recommendation accuracy by 40%.",
          "Developing a custom ML model targeting a 20% improvement in prediction accuracy."
        ],
        githubUrl: "https://github.com/AsutoshRath2004/VITAL",
        status: "In Progress University Major Project",
        technologies: ["MERN Stack", "Redis", "Machine Learning", "Sentiment Analysis"]
      },
      {
        title: "DRIVO - A Ride Booking System",
        description: "A MERN-based real-time ride booking platform with geolocation-based fare calculation, dual-role authentication, and WebSocket-powered ride status updates.",
        role: "Full Stack Developer",
        achievements: [
          "Developed a MERN-based ride booking system with dual-role JWT authentication and bcrypt, ensuring 99.9% session integrity.",
          "Integrated Google Maps API for live ride tracking and dynamic fare estimation with ±5% accuracy.",
          "Enabled real-time ride updates via Socket.IO, maintaining sub-200ms latency across 50+ concurrent sessions.",
          "Achieved 95+ Lighthouse scores using React 19, Vite, Tailwind CSS, and GSAP for a seamless user experience."
        ],
        githubUrl: "https://github.com/AsutoshRath2004/Drivo",
        status: "Personal Project",
        technologies: [
          "MERN Stack", "Socket.IO", "Google Maps API", "JWT", "Tailwind CSS", "GSAP", "React 19"
        ]
      },      
      {
        title: "VIDSTREAM - Video Streaming Platform",
        description: "A real-time video streaming platform built during a 36-hour hackathon, supporting 300+ videos and 1,000+ users.",
        role: "Firebase Manager and API Developer",
        achievements: [
          "Built a live video platform with Firebase Realtime Database, managing 1,000+ user profiles and video metadata.",
          "Optimized performance with chunk-based fetching and lazy loading, cutting video load time by 25%.",
          "Integrated Firebase Auth with session persistence and logout handling, ensuring 99.9% consistency at scale.",
          "Developed a responsive React + Vite video gallery, improving navigation speed by 30% in low-bandwidth environments."
        ],
        githubUrl: "https://github.com/AsutoshRath2004/Vid-Stream",
        status: "36-Hour Hackathon Project",
        technologies: ["React", "Vite", "Firebase", "Video API"]
      },
      {
        title: "BLOGIFY - Blog Site",
        description: "A secure blog platform using Node.js, Express.js, EJS, and MongoDB for 1,000+ users and posts.",
        role: "Full Stack Developer",
        achievements: [
          "Built a secure blog platform using Node.js, Express.js, EJS, and MongoDB for 1,000+ users and posts.",
          "Implemented JWT authentication and bcrypt hashing, ensuring 99.9% session integrity.",
          "Reduced data retrieval times by 25% by optimizing database queries and indexing.",
          "Improved page load times by 35% using Bootstrap, lazy loading, and optimized asset delivery."
        ],
        githubUrl: "https://github.com/AsutoshRath2004/BLOGIFY",
        status: "Personal Project",
        technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"]
      }
    ]
  
    return (
      <section id="projects" className="section-padding bg-slate-900">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 rounded-lg overflow-hidden hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1"
              >
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-blue-400 mb-2">{project.role}</p>
                        <div className="mb-4">
                          <span className="inline-block bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full">
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="bg-slate-700 p-2 rounded-full">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  