import { AuthApi } from '../../CardsApi/Api';
import { Dispatch } from 'redux';

type InitialStateType = typeof initialState
const initialState = {
	isAuth : false
};
type ActionType = AuthActionType
export const authReducer = ( state : InitialStateType = initialState, action : ActionType ) => {
	switch ( action.type ) {
		case 'AUTH':
			return { ...state, isAuth : action.payload.isAuth };
		default:
			return state;
	}
};

type AuthActionType = ReturnType<typeof auth>
const auth = ( isAuth : boolean ) => ({ type : 'AUTH', payload : { isAuth } } as const);

export const authTC = ( email : string, password : string ) => ( dispatch : Dispatch ) => {
	AuthApi.login ( email, password ).then ( res => {
		return res;
	} )
		.then ( ( res ) => {
			console.log ( dispatch );
			if (res.data._id) {
				dispatch ( auth ( true ) );
			}
		} )
		.catch ( ( e ) => {
			const error = e.response
				? e.response.data.error
				: (e.message + ', more details in the console');
		} );
};

export const authLogOut = () => ( dispatch : Dispatch ) => {
	console.log ( 'hi' );
	AuthApi.logOut ()
		.then ( ( res ) => {
			dispatch ( auth ( false ) );
		} )
		.catch ( ( e ) => {
			const error = e.response
				? e.response.data.error
				: (e.message + ', more details in the console');
		} );
};