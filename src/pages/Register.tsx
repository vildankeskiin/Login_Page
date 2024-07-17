import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        password: '',
    };
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        surname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const OnSubmit = (values: {
        name: string;
        surname: string;
        email: string;
        password: string;
    }) => { 
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(values);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('User registered successfully');
        navigate('/Login');
    };

    return(
        <div className="container">   
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={OnSubmit}>

                <Form>
                <h2>Register</h2>

                    <div className= 'form-group'> 
                        <label htmlFor='name'>Name</label>
                        <Field name='name' type='text' className='form-control' />
                        <ErrorMessage name='name' component='div' className='alert alert-danger mt-2' />
                    </div>
                    
                    <div className= 'form-group'> 
                        <label htmlFor='surname'>Surname</label>
                        <Field name='surname' type='text' className='form-control' />
                        <ErrorMessage name='surname' component='div' className='alert alert-danger mt-2' />
                    </div>

                    <div className= 'form-group'> 
                        <label htmlFor='email'>Email</label>
                        <Field name='email' type='email' className='form-control' />
                        <ErrorMessage name='email' component='div' className='alert alert-danger mt-2' />
                    </div>

                    <div className= 'form-group'> 
                        <label htmlFor='password'>Password</label>
                        <Field name='password' type='password' className='form-control' />
                        <ErrorMessage name='password' component='div' className='alert alert-danger mt-2' />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Register;