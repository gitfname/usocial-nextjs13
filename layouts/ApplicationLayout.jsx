
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// // icons
// import 'primeicons/primeicons.css';

import NavBar from "@/components/NavBar"
import ProfileCard from "@/components/ProfileCard"

        
function ApplicationLayout({children}) {
  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-[48px_calc(100%-48px)] 2xl:grid-rows-[52px_calc(100%-52px)]">
        <NavBar />
        <div className="grid grid-cols-[250px_1fr] w-[90%] mx-auto">
          
          <div className="border border-red-500 space-y-10 overflow-y-auto py-10 pr-1.5">

            <ProfileCard />

            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
            <div className="w-11/12 h-32 mx-auto border border-red-400 rounded-lg"></div>
          </div>

          <div className="overflow-y-auto px-10 py-10">
            {children}
          </div>
        </div>
    </div>
  )
}

export default ApplicationLayout