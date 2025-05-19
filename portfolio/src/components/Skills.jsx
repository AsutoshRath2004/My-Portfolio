export default function Skills() {
    const skillCategories = [
      {
        category: "Programming Languages",
        skills: ["JavaScript", "OOPS with Java", "Python Programming Language", "C Programming Language", "DSA with C++"]
      },
      {
        category: "Frontend Development",
        skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "EJS", "Bootstrap"]
      },
      {
        category: "Backend Development",
        skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "JWT & OAuth"]
      },
      {
        category: "Database & Cloud",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "AWS"]
      },
      {
        category: "Tools & Frameworks",
        skills: ["Redux.js", "Postman", "JSON APIs", "Git & GitHub"]
      },
    ]
  
    return (
      <section id="skills" className="section-padding">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }