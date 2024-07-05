// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const UserForm = () => {

//     const navigate  = useNavigate();

//   const onSubmit = (values, { setSubmitting }) => {
//     axios.post('http://localhost:8000/user/', values)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   const handlesubmit = () => {
//     navigate('/');
//   }

//   return (
//     <div className=" flex items-center justify-center min-h-screen bg-indigo-300">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold text-center">Create User</h1>
//         <Formik initialValues={{ name: '', mobile: '', email: '', password: '' }} onSubmit={onSubmit}>
//           {({ isSubmitting }) => (
//             <Form onSubmit={handlesubmit} className="space-y-6 ">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <Field type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//               <div>
//                 <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
//                 <Field type="text" id="mobile" name="mobile" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <Field type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <Field type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
//               </div>
//               <div>
//                 <button type="submit" disabled={isSubmitting} className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                   Create User
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default UserForm;
