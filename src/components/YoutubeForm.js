import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: 'Tay',
    email: '',
    channel: '',
};

const onSubmit = (values) => {
    console.log('Form data', values);
};

const validate = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            values.email
        )
    ) {
        errors.email = 'Enter valid email';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
};

function YoutubeForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    console.log('Form errors', formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id="channel"
                        name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                    />
                    {formik.errors.channel ? (
                        <div className="error">{formik.errors.channel}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;
