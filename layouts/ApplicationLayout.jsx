
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// // icons
// import 'primeicons/primeicons.css';

import NavBar from "@/components/NavBar"
import ProfileCard from "@/components/ProfileCard"
import SideNavBar from "@/components/SideNavBar"
import Button from "@/components/Button"
import ThemeProvider from "@/components/ThemeProvider"

        
function ApplicationLayout({children}) {
  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-[48px_calc(100%-48px)] 2xl:grid-rows-[52px_calc(100%-52px)]">
        <NavBar />
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] 2xl:grid-cols-[350px_1fr] w-full lg:w-[90%] mx-auto">
          
          <div className="space-y-5 overflow-y-auto py-10 pr-1.5 max-lg:hidden">

            <ProfileCard />
            
            <SideNavBar />

            <Button
              className="w-full py-2"
               text="Create Post"
            />
          </div>

          <div className="overflow-y-auto px-3.5 md:px-10 py-10" id="main-section">
            {children}
            <ThemeProvider />
          </div>
        </div>
    </div>
  )
}

export default ApplicationLayout