import React from "react";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";

function ContactForm() {
	return (
		// conditional render success or ""
        <Form success>
			<Form.Group widths="equal">
				<Form.Field
					id="form-input-control-first-name"
					control={Input}
					aria-label="First name"
					placeholder="First name"
				/>
				<Form.Field
					id="form-input-control-last-name"
					control={Input}
					aria-label="Last name"
					placeholder="Last name"
				/>
			</Form.Group>
			<Form.Field
				id="form-textarea-control-opinion"
				control={TextArea}
				aria-label="Message"
				placeholder="Message"
			/>

			<Form.Field
				id="form-button-control-public"
				control={Button}
				content="Confirm"
			/>
			<Message
				success
				header="Form Completed"
				content="Email has been sent. Thanks!"
			/>
		</Form>
	);
}

export default ContactForm;
