import { ChaiMenu } from "./components/AllChai.jsx";
import { useSpecialChai } from "./hooks/useSpecialChai.js";


const Chai = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export function App() {
    const {chai, loading, error} = useSpecialChai()

    if (loading) return <h3>loading...</h3>
    if (error) return <h3>Error: {error}</h3>

    return (
        <div class="test">
            <h1>Chai Variations by chai-code</h1>
            <Chai name="Masala Chai" />
            <Chai name="Ginger Chai" />
            <Chai name="Lemon Tea" /> <br />

            <h1>Handling array in react through api</h1>
            <ChaiMenu />

            <h1>Custom Hooks in React</h1>
            <h3>{chai.name}</h3>
            
            <h3>{/*(loading && error) && chai.name*/}</h3>
        </div>
    )
}