import React from "react";
import {Route, Routes} from "react-router-dom";
import HumorousPage from "./pages/HumorousPage/HumorousPage";

const App = () => {

    return (
        <Routes>
            <Route path="*" element={<HumorousPage />} />
        </Routes>
    );

}

export default App;
