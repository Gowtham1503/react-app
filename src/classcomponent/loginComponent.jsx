import React from "react"
import TestComp from "../functionalcomponent/testcomponent";
class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Class Component Example </h1>
                <TestComp></TestComp>
            </div>
        );
    }
}
export default Login;