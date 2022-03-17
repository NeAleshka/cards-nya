import React, {ChangeEvent, useState} from 'react';
import style from '../style/RecoveryPass.module.css';
import {cardsApi} from "../CardsApi/Api";


const RecoveryPass = ( ) => {
	const [email, setEmail] = useState('');

	const onChange = (e:ChangeEvent<HTMLInputElement>) => {
	  setEmail(e.currentTarget.value)
	}

	const onClickSend = () => {
	  cardsApi.forgotPassword(email,"test-front-admin <ai73a@yandex.by>",`<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>
link</a>`).then(res=>{
		  console.log(res)
	  })
	}
	
	
	return (
		<div className={ style.rememberPasswordContainer }>
			<div className={ style.titleContainer }>
				<h1>it-incubator</h1>
				<h2>forgot your password?</h2>
			</div>
			<div className={ style.inputContainer }>
				<input type="email" onChange={onChange} value={email}/>
				<div> enter your email address and we will send you further instructions</div>
			</div>
			<div className={ style.buttonContainer }>
				<button type="submit" onClick={onClickSend}>send instructions</button>
			</div>
			<div className={ style.rememberContainer }>
				<div>Did your remember your password?</div>
				<div>try logging in</div>
			</div>
		</div>
	);
};

export default RecoveryPass;