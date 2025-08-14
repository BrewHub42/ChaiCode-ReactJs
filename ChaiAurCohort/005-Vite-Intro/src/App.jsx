const Chai = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export function App() {
    return (
        <div class="test">
            <h1>Chai Variations by chai-code</h1>
            <Chai name="Masala Chai" />
            <Chai name="Ginger Chai" />
            <Chai name="Lemon Tea" />
        </div>
    )
}