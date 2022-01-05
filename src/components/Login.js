import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'
import './style.css'
import { withRouter } from 'react-router-dom';

function Login(props) {
    let initialValues = {
        username: '',
        password: '',
        remember: false
    }
    let validationSchema = yup.object().shape({
        username: yup.string().email("Please enter valid email").required('Email Required'),
        password: yup.string().required('Password is Required').min(5).max(10)
    })
    let onSubmit = (values, props) => {
        console.log(values);
        props.resetForm()
    }
    let navigateToSignup = () => {
        // console.log(props);
        props.history.push('/signup')
    }
    return (
        <div className='container mt-5 border' style={{ width: '50%' }}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>

                {(props) => (
                    <Form>
                        {/* {console.log(props)} */}
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <Field type="email" className="form-control" id="exampleInputEmail1" autoComplete='off' name='username' />
                            <p className='error'><ErrorMessage name='username'></ErrorMessage></p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <Field type="password" className="form-control" id="exampleInputPassword1" autoComplete='off' name='password' />
                            <p className='error'><ErrorMessage name='password'></ErrorMessage></p>
                        </div>

                        <div className="mb-3 form-check">
                            <Field type="checkbox" className="form-check-Field" id="exampleCheck1" name='remember' />
                            <label className="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <h4 style={{ cursor: 'pointer' }} onClick={navigateToSignup}>Don't have an account? Signup here !</h4>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default withRouter(Login) 
