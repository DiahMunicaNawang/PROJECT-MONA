// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react';
// import "bootstrap/dist/css/bootstrap.min.css";


//   function DataSignin() {
//     const [DataSignin, setDataSignin] = useState([]);


//     const GetDataSignin = async () => {
//         const getData = await axios.get(
//             'http://localhost:8080/data/'
//         );
//         setDataSignin(getData.data.data);
//         console.log(getData);
//         };

//     useEffect(() => {
//         GetDataSignin();
//     }, []);

//   return (
//     <div className='body-flex'>
//       <div className="flex">
//         <div className='col-12 p-4'>
//           <h1 className="py-1">Data User</h1>
//           <CCard className="mb-4">
//             <CCardHeader>
//               <strong>Tabel User</strong>
//             </CCardHeader>
//             <CCardBody>
//               <CTable striped>
//                 <CTableHead>
//                   <CTableRow>
//                     <CTableHeaderCell scope="col">Email</CTableHeaderCell>
//                     <CTableHeaderCell scope="col">Password</CTableHeaderCell>
//                     <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
//                   </CTableRow>
//                 </CTableHead>
//                 <CTableBody>
//                   {DataSignin.map((item, index) => (
//                     <CTableRow key={index}>
//                       <CTableDataCell>{item.user}</CTableDataCell>
//                       <CTableDataCell>{item.password}</CTableDataCell>
//                       <CTableDataCell>
//                         <CButton className='btn btn-primary text-white me-2'>
//                           Edit
//                         </CButton>
//                         <CButton type="submit" className='btn btn-danger text-white'>
//                           Hapus
//                         </CButton>
//                       </CTableDataCell>
//                     </CTableRow>
//                   ))}
//                 </CTableBody>
//               </CTable>
//             </CCardBody>
//           </CCard>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DataSignin;