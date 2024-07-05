// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//   });

//   const onSubmit = (values, { setSubmitting }) => {
//     axios.post('http://localhost:8000/user/login', values)
//       .then(response => {
//         const { token } = response.data;
//         localStorage.setItem('token', token);
//         navigate('/dashboardadmin');
//       })
//       .catch(error => {
//         console.error('There was an error logging in!', error);
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-indigo-300">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
//         <div>
//           <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to Admin</h2>
//         </div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={onSubmit}
//         >
//           {({ isSubmitting }) => (
//             <Form className="mt-8 space-y-6">
//               <div>
//                 <label htmlFor="email" className="sr-only">Email</label>
//                 <Field
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="relative block w-full px-4 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                 />
//                 <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
//               </div>
//               <div className='mt-4'>
//                 <label htmlFor="password" className="sr-only">Password</label>
//                 <Field
//                   type="password"
//                   id="password"
//                   name="password"
//                   className="relative block w-full px-3 py-3 border-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                 />
//                 <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <Field
//                     type="checkbox"
//                     id="remember-me"
//                     name="remember-me"
//                     className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
//                   />
//                   <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
//                     Remember me
//                   </label>
//                 </div>
//                 <div className="text-sm">
//                   <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                     Forgot your password?
//                   </a>
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Login
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
