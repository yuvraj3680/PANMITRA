// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
// } from "@mui/material";
// import ChevronUpIcon from "@mui/icons-material/ChevronUp";

// const PaperlesspanList = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/newpan/");
//         console.log(response.data); // Check the structure of response data
//         setData(response.data.data); // Set data state with the 'data' array from response
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         // Handle error state or logging as needed
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Page Title */}
//         <div className="bg-gray-200 px-4 py-2 rounded-t-lg mb-4">
//           <h1 className="text-lg font-bold text-gray-800">
//             NSDL e-KYC PAN History
//           </h1>
//         </div>

//         {/* Show Entries and Search */}
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
//           <div className="flex gap-6 items-center mb-2 sm:mb-0">
//             <div>
//               <TextField
//                 type="date"
//                 placeholder="06/15/2024"
//                 className="p-2 px-8"
//                 variant="outlined"
//                 size="small"
//               />
//             </div>
//             <div>
//               <TextField
//                 type="date"
//                 placeholder="06/15/2024"
//                 className="p-2 px-8"
//                 variant="outlined"
//                 size="small"
//               />
//             </div>
//             <div>
//               <TextField
//                 type="text"
//                 placeholder="ORDER Id/Ack Number / Etc"
//                 className="p-2 px-8"
//                 variant="outlined"
//                 size="small"
//               />
//             </div>
//           </div>
//           <div className="flex items-center">
//             <label htmlFor="search" className="mr-2 font-semibold">
//               Search
//             </label>
//             <TextField
//               type="text"
//               id="search"
//               name="search"
//               className="px-2 py-1 border border-gray-300 rounded bg-gray-200"
//               variant="outlined"
//               size="small"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <Paper className="mb-8">
//           <TableContainer>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell className="px-4 py-2 flex items-center cursor-pointer">
//                     <span className="mr-1">ID</span>
//                     <ChevronUpIcon className="h-4 w-4 text-gray-400" />
//                   </TableCell>
//                   <TableCell className="px-4 py-2">User Details</TableCell>
//                   <TableCell className="px-4 py-2">PAN DETAILS</TableCell>
//                   <TableCell className="px-4 py-2">Contact Details</TableCell>
//                   <TableCell className="px-4 py-2">Address</TableCell>
//                   <TableCell className="px-4 py-2">Amount</TableCell>
//                   <TableCell className="px-4 py-2">ACK Details</TableCell>
//                   <TableCell className="px-4 py-2">PRE FILL</TableCell>
//                   <TableCell className="px-4 py-2">STATUS</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {data.map((item) => (
//                   <TableRow key={item.id} hover>
//                     <TableCell className="px-4 py-3">{item.id}</TableCell>
//                     <TableCell className="px-4 py-3">
//                       {item.aadhaarNumber} <br />
//                       {item.dateOfBirth} <br />
//                       {item.panCardType}
//                     </TableCell>
//                     <TableCell className="px-4 py-3">
//                       {item.nameOnCard} <br />
//                       {item.dateOfBirth} <br />
//                       {item.gender}
//                     </TableCell>
//                     <TableCell className="px-4 py-3">
//                       {item.mobileNumber} <br />
//                       {item.emailAddress}
//                     </TableCell>
//                     <TableCell className="px-4 py-3">
//                       {item.proofOfAddress} <br />
//                       {item.address} <br />
//                     </TableCell>
//                     <TableCell className="px-4 py-3">{item.charges}</TableCell>
//                     <TableCell className="px-4 py-3">{item.nameAsPerAadhaar}</TableCell>
//                     <TableCell className="px-4 py-3">{item.nameAsPerAadhaar}</TableCell>
//                     <TableCell className="px-4 py-3">Pending</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default PaperlesspanList;
