import React, { useState } from "react";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";
import emailjs from "emailjs-com";

function ContactForm(props) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [message, setMessage] = useState("");

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	const templateParams = {
		firstName,
		lastName,
		message,
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs.send(
				"outlook",
				"template_SD22jYts",
				templateParams,
				"user_cI87SCMMsY23cnlYpQMEJ"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		// conditional render success or ""
		<Form success onSubmit={handleSubmit}>
			<Form.Group widths="equal">
				<Form.Field
					id="form-input-control-first-name"
					control={Input}
					aria-label="First name"
					placeholder="First name"
					onChange={handleFirstNameChange}
				/>
				<Form.Field
					id="form-input-control-last-name"
					control={Input}
					aria-label="Last name"
					placeholder="Last name"
					onChange={handleLastNameChange}
				/>
			</Form.Group>
			<Form.Field
				id="form-textarea-control-opinion"
				control={TextArea}
				aria-label="Message"
				placeholder="Message"
				onChange={handleMessageChange}
			/>

			<Form.Field
				id="form-button-control-public"
				control={Button}
				content="Confirm"
			/>
			<Message
				success
				header="Success"
				content="Email has been sent. Thanks!"
			/>
		</Form>
	);
}

export default ContactForm;
