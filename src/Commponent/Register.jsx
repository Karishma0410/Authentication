import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    var name = useRef();
    var email = useRef();
    var password = useRef();
    var phone = useRef();
    var gender = useRef();
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    var registerUser = (event) => {
        event.preventDefault();

        var nm = name.current.value;
        var em = email.current.value;
        var pass = password.current.value;
        var mob = phone.current.value;
        var gen = gender.current.value;
        console.log(nm + " : " + em + " : " + pass + " : " + mob + " : " + gen)
        var obj = { name: nm, phone: mob, email: em, password: pass, gender: gen }
        fetch("http://tutorials.codebetter.in:7084/auth/save", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(obj) }).then(res => res.json()).then((result) => {
            console.log("Response is :" + result);
            console.log("String Respomse is :" + JSON.stringify(result));
            if (result.status) {
                navigate("/login");
            }
            else {
                setMsg(result.message)
            }
        }).catch((err) => { console.log("Error is :" + err); })

    }

    return <div className="container text-center">
        <h1 style={{ color: "red" }}>Register Here!</h1>
        <form onSubmit={registerUser}>
            <div className="form-group">
                <label>Enter Name :</label>
                <input type="text" ref={name} className="form-control" placeholder="Enter Name" />
            </div>
            <br />
            <div className="form-group">
                <label>Enter Email :</label>
                <input type="text" ref={email} className="form-control" placeholder="Enter Email" />
            </div>
            <br />
            <div className="form-group">
                <label>Enter Password :</label>
                <input type="text" ref={password} className="form-control" placeholder="Enter Password" />
            </div>
            <br />
            <div className="form-group">
                <label>Enter Phone :</label>
                <input type="number" ref={phone} className="form-control" placeholder="Enter Phone" />
            </div>
            <br />
            <div className="form-group">
                <label>Select Gender:</label>
                <select className="form-control" ref={gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <br />
            <div className="form-group">
                <button className="form-control btn btn-success" type="submit">Register!</button>
            </div>
        </form>
        <h1 style={{ color: 'red' }}>{msg}</h1>

    </div>
}
export default Register;