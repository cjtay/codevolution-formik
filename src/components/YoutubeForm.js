import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="name">Name (test)</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" />
                </div>

                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;
