import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderContainer/>
                <Content/>
                <Footer/>
            </BrowserRouter>

        </div>
    )
}

export default App;
