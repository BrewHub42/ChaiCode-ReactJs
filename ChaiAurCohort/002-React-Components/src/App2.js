import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const Chai = (props) => {
    console.log(props);

    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("p", {}, props.cost),
    ])
}

const App = () => {
    return React.createElement(
        'div',
        { class: "test" },
        [
            React.createElement("h1", {}, "Chai Variations by chai-code"),
            React.createElement(Chai, {
                name: "Masala Chai",
                cost: "100"
            }),
            React.createElement(Chai, {
                name: "Ginger Chai",
                cost: "200"
            }),
            React.createElement(Chai, {
                name: "Lemon Tea",
                cost: "400"
            }),
        ]
    )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))