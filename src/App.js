import React from "react";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// this is just so I can remember this abomination exists...
const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App;
