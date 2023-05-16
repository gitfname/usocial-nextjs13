
//theme
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// // icons
// import 'primeicons/primeicons.css';
        
function ApplicationLayout({children}) {
  return (
    <div className="w-screen h-screen">
        {children}
    </div>
  )
}

export default ApplicationLayout