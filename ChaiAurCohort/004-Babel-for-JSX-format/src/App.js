// import React from "https://unpkg.com/react@18.3.1/umd/react.development.js"
// import ReactDOM from "https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"

const Chai = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

const App = () => {
    return (
        <div class="test">
            <h1>Chai Variations by chai-code</h1>
            <Chai name="Masala Chai" />
            <Chai name="Ginger Chai" />
            <Chai name="Lemon Tea" />
        </div>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)