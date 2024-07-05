// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const AdminForm = () => {
//   const initialValues = {
//     name: '',
//     mobile: '',
//     email: '',
//     password: '',
//     role: 'ADMIN', // default role
//     permissions: [], // Array to hold selected permissions
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Required'),
//     mobile: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email format').required('Required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
//     permissions: Yup.array().of(Yup.string()),
//   });

//   const onSubmit = (values, { setSubmitting }) => {
//     axios.post('/api/admin', values)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error creating the admin!', error);
//       })
//       .finally(() => {
//         setSubmitting(false);
//       });
//   };

//   return (
//     <div className='bg-indigo-300'>
//       <h1>Create Admin</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <label htmlFor="name">Name</label>
//               <Field type="text" id="name" name="name" />
//               <ErrorMessage name="name" component="div" />
//             </div>
//             <div>
//               <label htmlFor="mobile">Mobile</label>
//               <Field type="text" id="mobile" name="mobile" />
//               <ErrorMessage name="mobile" component="div" />
//             </div>
//             <div>
//               <label htmlFor="email">Email</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage name="email" component="div" />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <Field type="password" id="password" name="password" />
//               <ErrorMessage name="password" component="div" />
//             </div>
//             <div>
//               <label>Permissions</label>
//               <div>
//                 <label>
//                   <Field type="checkbox" name="permissions" value="CREATE_USER" />
//                   Create User
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <Field type="checkbox" name="permissions" value="UPDATE_USER" />
//                   Update User
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <Field type="checkbox" name="permissions" value="DELETE_USER" />
//                   Delete User
//                 </label>
//               </div>
//               <div>
//                 <label>
//                   <Field type="checkbox" name="permissions" value="VIEW_USER" />
//                   View User
//                 </label>
//               </div>
//             </div>
//             <div>
//               <button type="submit" disabled={isSubmitting}>Create Admin</button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default AdminForm;
