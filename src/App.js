import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";

function App() {
    return (
        <div className="container">
            <h1>Bug Blaster</h1>
            <TicketForm></TicketForm>
        </div>
    );
}

export default App;
