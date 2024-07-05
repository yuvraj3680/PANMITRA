// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [editingUser, setEditingUser] = useState(null);
//   const [updatedUser, setUpdatedUser] = useState({});

//   useEffect(() => {
//     axios.get('http://localhost:8000/user/')
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           setUsers(response.data.data);
//         } else {
//           console.error('Data received is not an array:', response.data);
//         }
//       })
//       .catch(error => {
//         console.error('There was an error fetching the users!', error);
//       });
//   }, []);

//   const handleDelete = (id, email) => {
//     axios.delete(`http://localhost:8000/user/${id}`)
//       .then(() => {
//         setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
//         setPopupMessage(`User ${email} was deleted successfully`);
//         setTimeout(() => {
//           setPopupMessage('');
//         }, 3000);
//       })
//       .catch(error => {
//         console.error('There was an error deleting the user!', error);
//       });
//   };

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setUpdatedUser(user);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = (id) => {
//     axios.put(`http://localhost:8000/user/${id}`, updatedUser)
//       .then(response => {
//         setUsers(prevUsers => prevUsers.map(user => (user.id === id ? response.data.data : user)));
//         setPopupMessage(`User ${updatedUser.email} was updated successfully`);
//         setEditingUser(null);
//         setTimeout(() => {
//           setPopupMessage('');
//         }, 3000);
//       })
//       .catch(error => {
//         console.error('There was an error updating the user!', error);
//       });
//   };

//   const handleCancelEdit = () => {
//     setEditingUser(null);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-indigo-300">
//       <div className="w-full max-w-2xl p-8 space-y-8 bg-white shadow-lg rounded-lg">
//         <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-4">User List</h1>
//         {popupMessage && (
//           <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md">
//             {popupMessage}
//           </div>
//         )}
//         <ul>
//           {users.map(user => (
//             <li key={user.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
//               <div className="mb-2">
//                 <strong className="text-lg">{user.name}</strong>
//               </div>
//               <div className="text-gray-600">
//                 <p><strong>Mobile:</strong> {user.mobile}</p>
//                 {user.email && <p><strong>Email:</strong> {user.email}</p>}
//                 {user.password && <p><strong>Password:</strong> {user.password}</p>}
//               </div>
//               <div className="mt-4 flex space-x-2">
//                 <button
//                   onClick={() => handleDelete(user.id, user.email)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   Delete
//                 </button>
//                 <button
//                   onClick={() => handleEdit(user)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Edit
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         {editingUser && (
//           <div className="bg-white rounded-lg shadow-md p-4 mb-4">
//             <h2 className="text-2xl font-bold mb-4">Edit User</h2>
//             <div className="mb-2">
//               <label className="block text-gray-700">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={updatedUser.name}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">Mobile:</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={updatedUser.mobile}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">Email:</label>
//               <input
//                 type="text"
//                 name="email"
//                 value={updatedUser.email}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">Password:</label>
//               <input
//                 type="text"
//                 name="password"
//                 value={updatedUser.password}
//                 onChange={handleInputChange}
//                 className="w-full px-3 py-2 border-2 border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mt-4 flex space-x-2">
//               <button
//                 onClick={() => handleUpdate(editingUser.id)}
//                 className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={handleCancelEdit}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserList;
