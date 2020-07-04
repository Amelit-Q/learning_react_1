import React from 'react'
import styles from "./ControlForms.module.css"

const ControlForm = ({ input, meta, child, ...props }) => {

    const showError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (showError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {

    const { input, meta, child, ...restProps } = props

    return <ControlForm {...props}><textarea {...input} {...restProps} /></ControlForm>
}

export const Input = (props) => {

    const { input, meta, child, ...restProps } = props

    return <ControlForm {...props}><input {...input} {...restProps} /></ControlForm>
} 