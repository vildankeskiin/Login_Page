import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './Login.css';


const Login = () => {
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState <string|null> (null); //useState <> ()
    const [loginSuccess, setLoginSuccess] = useState<string | null>(null);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const OnSubmit = (values: {
        email: string;
        password: string;
    }) => { 
        const registeredUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = registeredUsers.find((user: { email: string; password: string; }
             ) => user.email === values.email && user.password === values.password);

        if (!user) {
            setLoginError('Invalid email or password');
            setLoginSuccess(null);
        } else {
            setLoginError(null);
            setLoginSuccess('Login successful');
            console.log('Login successful');
            navigate('/Home');
        }
    };

    return(
        <div className='container'>

            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={OnSubmit}>
                    <Form>
                    <h2> Login</h2> 
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <Field name='email' type='email' className='form-control' />
                            <ErrorMessage name='email' component='div' className='alert alert-danger mt-2' />
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <Field name='password' type='password' className='form-control' />
                            <ErrorMessage name='password' component='div' className='alert alert-danger mt-2' />
                        </div>

                        <button type='submit' className='btn btn-primary mt-2'>Login</button>
                        {loginError && <div className='alert alert-danger mt-2'>{loginError} </div>}
                        {loginSuccess && <div className="alert alert-success mt-2">{loginSuccess}</div>}

                        <button className="btn btn-link" onClick={() => navigate('/register')}>Register</button>

                    </Form>

            </Formik>
            

        </div>

    )
}

export default Login;