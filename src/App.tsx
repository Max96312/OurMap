import { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("api/v1").then((res) => {
            console.log(res);
            return res.json();
        });
    }, []);

    return (
        <>
            <Login />
        </>
    );
}

export default App;
