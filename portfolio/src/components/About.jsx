export default function About() {
    return (
      <section id="about" className="section-padding bg-slate-900">
        <div className="container mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              I'm Asutosh Rath, a Computer Science student specializing in AI & ML at Dr. A. P. J. Abdul Kalam Technical University. I'm passionate about developing efficient and scalable web applications, with a particular focus on the MERN stack.
            </p>
            <p className="text-gray-300 mb-4">
              My technical journey spans across full-stack development, where I've built projects like VITAL (a nutrition recommendation website), VIDSTREAM (a video streaming platform), and BLOGIFY (a secure blog platform). I enjoy solving complex problems and creating intuitive user experiences.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me playing basketball, chess, or practicing B-Boy dancing. I'm constantly exploring new technologies and looking for opportunities to grow as a developer.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="bg-slate-800 p-6 rounded-lg">
                <h4 className="text-lg font-medium">Dr. A. P. J. Abdul Kalam Technical University</h4>
                <p className="text-gray-400">Bachelor of Technology in Computer Science and Engineering (AI&ML)</p>
                <p className="text-gray-400">Aug 2022 - Jun 2026 (Expected)</p>
                <p className="text-gray-400">CGPA: 7.6/10 (Current)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }