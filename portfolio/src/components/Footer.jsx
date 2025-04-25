export default function Footer() {
    const currentYear = new Date().getFullYear()
    
    return (
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Asutosh<span className="text-blue-500"> Rath</span></h2>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Asutosh Rath. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }