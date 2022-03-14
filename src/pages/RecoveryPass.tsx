import React from 'react';
import style from '../style/RecoveryPass.module.css';

type propsRecoveryPassType = {}

const RecoveryPass = ( props : propsRecoveryPassType ) => {
	return (
		<div className={ style.rememberPasswordContainer }>
			<div className={ style.titleContainer }>
				<h1>it-incubator</h1>
				<h2>forgot your password?</h2>
			</div>
			<div className={ style.inputContainer }>
				<input type="email"/>
				<div> enter your email address and we will send you further instructions</div>
			</div>
			<div className={ style.buttonContainer }>
				<button type="submit">send instructions</button>
			</div>
			<div className={ style.rememberContainer }>
				<div>Did your remember your password?</div>
				<div>try logging in</div>
			</div>
		</div>
	);
};

export default RecoveryPass;