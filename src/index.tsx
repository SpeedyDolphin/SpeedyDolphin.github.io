import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="/Home"   element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" exact errorElement={<PermissionDenied />}>
//             <Route index element={<Login/>}/>
//             <Route path="/superAdminHome"   element={<SuperAdminHome/>} />
//             <Route path="/addManufacturer"  element={<AddManufacturer />} />
//             <Route path="/addRetailer"      element={<AddRetailer/>} />
//             <Route path="/editManufacturer/:manufacturer" element={<EditManufacturer />} />
//             <Route path="/manufacturerHome" element={<ManufacturerHome />} />
//             <Route path="/playground" element={<Playground />} />
//             <Route path="/manufacturerHome/:manufacturerId" element={<ManufacturerHome />} />
//             <Route path="/ViewRetailer" element={<ViewRetailer />} />
//             <Route path='*' element={<PermissionDenied />} />
//           </Route>
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
