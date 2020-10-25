import React from 'react';
import {Field, Form, Formik} from "formik";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";

function FormAdd() {
	return (
		<div className="mt-8 w-2/5 mx-auto p-5 border rounded shadow bg-gray-100">
			<h1 className="text-xl text-center py-5 text-gray-900">Form add</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					let errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({submitForm, isSubmitting, values}) => (
					<Form className="text-center">
						<Box>
							<Field
								component={TextField}
								name="email"
								type="email"
								label="Email"
							/>
						</Box>
						<br/>
						<Box>
							<Field
								component={TextField}
								type="password"
								label="Password"
								name="password"
							/>
						</Box>
						{isSubmitting && <LinearProgress/>}
						<br/>
						<Box>
							<Button
								variant="contained"
								color="primary"
								disabled={isSubmitting}
								onClick={submitForm}
							>
								Submit
							</Button>
						</Box>
						<pre className="text-left">{JSON.stringify(values, null, 4)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default FormAdd;
