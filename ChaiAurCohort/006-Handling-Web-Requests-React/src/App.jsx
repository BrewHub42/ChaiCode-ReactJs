import { useState, useEffect } from "react";

const Chai = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch(`/api`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => setMessage("Failed to load"));
    }, []);

    return (
        <div class="test">
            <h1>Welcome to chaicode</h1>
            <p>Serving hot chai with react</p>
            <p>{message}</p>

            <h2>Chai Variations by chai-code</h2>
            <Chai name="Masala Chai" />
            <Chai name="Ginger Chai" />
            <Chai name="Lemon Tea" />
        </div>
    )
}