import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),

const FormikForm = () => (
  <div>
    <h1>Formik Form</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default FormikForm;
