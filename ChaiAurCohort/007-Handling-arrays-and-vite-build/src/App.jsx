import { ChaiMenu } from "./components/AllChai.jsx";
import { ChaiCounter } from "./components/ChaiOrder.jsx";


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
            <Chai name="Lemon Tea" /> <br />

            <h1>Demonstration of useState</h1>
            <ChaiCounter /><br />

            <h1>Handling array in react through api</h1>
            <ChaiMenu />
        </div>
    )
}