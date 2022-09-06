import { Routes, Route, Outlet } from "react-router-dom";

const RoutesWhitNotFound = () => {

    const prueba = <Outlet/>

    return <Routes>
        {prueba}
        <Route path='*' element={<>Not Found</>} />
    </Routes>;
}

export default RoutesWhitNotFound