import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispacth] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispacth({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
          alt=""
        />

        <img
          src="https://lh3.googleusercontent.com/proxy/zP8QVMIc9kNlbaQigztjAI48UclYj4iMFVoZ6wgMd58DeE62YUSRn9el37qgDVR-Eve9sLylUjbtk0zgwNc9a9cq4srfow1ZYukATZQmT4M"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
