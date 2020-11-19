import React from 'react';

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: '',
        });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }) 
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="password"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required
                    />

                    <CustomButton type="submit">SUBMIT FORM</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
    } 
}

export default SignIn;