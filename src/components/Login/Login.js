import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../Common/ControlForms/ControlForms'
import { required } from '../../utilities/validators'
import { connect } from "react-redux"
import { login } from "../../redux/auth-reducer"
import style from './../Common/ControlForms/ControlForms.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                    name={'email'}
                    validate={[required]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={'Password'}
                    name={'password'}
                    validate={[required]}
                    component={Input}
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> HEY IT'S ME
            </div>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}

export default connect(null, { login })(Login)