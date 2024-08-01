import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_client from "../DataSource/api_client";
var apiClient = new api_client();


function Login() {

    var email = useRef();
    var password = useRef();
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();


    var loginUser = (event) => {
        event.preventDefault()
        var em = email.current.value;
        var pass = password.current.value;
        console.log(em + " :" + pass);
        var obj = { email: em, password: pass }
        console.log('baseurl :', apiClient.baseurl_);

        fetch(`${apiClient.baseurl_}${apiClient.login}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obj) }).then(res => res.json()).then((result) => {
            console.log("Response is :" + result);
            console.log("String Respomse is :" + JSON.stringify(result));
            if (result.status) {
                navigate("/userHome");
            }
            else {
                setMsg(result.message)
            }
        }).catch((err) => { console.log("Error is :" + err); })

    }
    return <div className="container text-center">
        <h1 style={{ color: 'red' }}>Login Here!</h1>
        <form onSubmit={loginUser}>
            <div className="form-group">
                <label>Enter Email :</label>
                <input type="email" ref={email} className="form-control" placeholder="Enter Email" />
            </div>
            <br />
            <div className="form-group">
                <label>Enter Password :</label>
                <input type="password" ref={password} className="form-control" placeholder="Enter Password" />
            </div>
            <br />
            <div className="form-group">
                <button className="form-control btn btn-success" type="submit">Login !</button>
                <br />
                <span>If you have not register ? click Here &nbsp;
                    <Link to="/register">Register Here !</Link>
                </span>
            </div>
        </form>
        <h1 style={{ color: 'red' }}>{msg}</h1>

    </div>
}
export default Login;