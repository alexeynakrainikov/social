import Navbar from "./Navbar/Navbar";
import styles from './Content.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main/Main";
import Articles from "./Articles/Articles";
import ForumContainer from "./Forum/ForumContainer";
import UsersContainer from "./Users/UsersContainer";


const Content = () => {
    return (
        <div className={styles.content}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/Main" element={<Main/>}/>
                    <Route path="/Articles" element={<Articles/>}/>
                    <Route path="/Forum" element={<ForumContainer/>}/>
                    <Route path="/Users" element={<UsersContainer/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Content