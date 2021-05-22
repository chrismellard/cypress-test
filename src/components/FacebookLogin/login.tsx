import FacebookLogin, {ReactFacebookLoginInfo} from 'react-facebook-login';

const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
}

const FBLogin = () => (
    <FacebookLogin appId="279936013813647"
                   autoLoad={true}
                   fields="name,email,picture"
                   // onClick={componentClicked}
                   callback={responseFacebook}/>
)

export default FBLogin;
