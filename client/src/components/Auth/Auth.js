import React, { useState } from 'react';
import Input from './Input';
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { useHistory } from 'react-router-dom';
import { AUTH } from "../../constants/actionTypes";
import { signin, signup } from "../../actions/auth";
import Main from '../front/main/Main';
import Services from '../front/services/Services';
import { FormLayout, FormTitle } from '../PageStyles/Forms';
import { ButtonElement, AuthOption } from "../PageStyles/Button";
import { FaGoogle } from "react-icons/fa";
import { LoginDiv } from '../PageStyles/Cards';
import image from './loginImg.svg';
import { LoginContent, LoginHeading } from '../PageStyles/Heading';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <Main />
      <Services />
      <LoginDiv id="card">
        <FormLayout style={{ width: "80vh", height: "auto", padding:"10px" }}>
          <form onSubmit={handleSubmit}>
            <LoginHeading>Explore now!</LoginHeading>
            <LoginContent>Join us to explore your amazing journey of shopping with platform and keep trending!</LoginContent>
            <GoogleLogin
              clientId="413566942607-1is7bd9pptvt5tge954i481egmiqpgje.apps.googleusercontent.com"
              render={(renderProps) => (
                <ButtonElement onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                  <FaGoogle /> &nbsp; Sign In with Google
                </ButtonElement>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          </form>
        </FormLayout>
        <img src={image} alt="img" className="img-fluid" style={{height:"200px"}} />
      </LoginDiv>
    </div>
  )
}

export default Auth;