import React from 'react';
import {
	Popover,
	ButtonToolbar,
	OverlayTrigger,
	Button,
	Card,
    Row,
    Col
} from 'react-bootstrap';

export default function Login() {
	const login = (
		<Popover
			id='popover-trigger-click'
			title='Popover bottom'
			style={{ height: '18rem', width: '18rem' }}
		>
			<div class='form-group'>
				<label class='form-label mt-4'>Floating labels</label>
				<div class='form-floating mb-3'>
					<input
						type='email'
						class='form-control'
						id='floatingInput'
						placeholder='name@example.com'
					/>
					<label for='floatingInput'>Email address</label>
				</div>
				<div class='form-floating'>
					<input
						type='password'
						class='form-control'
						id='floatingPassword'
						placeholder='Password'
					/>
					<label for='floatingPassword'>Password</label>
				</div>
                <Row>
                    
                </Row>
                
			</div>
		</Popover>
	);

	return (
		<>
			<ButtonToolbar>
				<OverlayTrigger
					trigger='click'
					placement='bottom'
					overlay={login}
				>
					<Button>Login</Button>
				</OverlayTrigger>
			</ButtonToolbar>
		</>
	);
}
