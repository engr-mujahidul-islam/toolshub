// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FolderPage from "./components/FolderManager";
// import TabsPage from "./components/TabsComponent";
// import Navbar from "./components/Navbar"; // Uncomment if you have a Navbar component
// import Home from "./pages/Home"; // Uncomment if you have a Home page
// import About from "./pages/About"; // Uncomment if you have an About page
// import Contact from "./pages/Contact"; // Uncomment if you have a Contact page
// // // Uncomment if you have a FolderPage or TabsPage
// // import FolderPage from "./pages/FolderPage";
// // import TabsPage from "./pages/TabsPage";

// // const App: React.FC = () => {
// //   return (
// //     <div>
// //           <Router>
// //             <Routes>
// //               <Route path="/" element={<h1>Home Page</h1>} />
// //               <Route path="/tabs" element={<TabsComponent />} />
// //               <Route path="/folders" element={<FolderManager />} />
// //               <Route path="/about" element={<h1>About Page</h1>} />
// //               <Route path="/contact" element={<h1>Contact Page</h1>} />
// //             </Routes>
// //           </Router>
// //       <Navbar />
// //     </div>
// //   );
// // };

// // export default App;



// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import TabsPage from "./pages/TabsPage";
// // import FolderPage from "./pages/FolderPage";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";

// const App = () => {
//   return (
//     <>    
//     <Router>
//     <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/tabs" element={<TabsPage />} />
//         <Route path="/folders" element={<FolderPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//     </>

//   );
// };

// export default App;



import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mainContent">
        <AppRoutes />
      </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
