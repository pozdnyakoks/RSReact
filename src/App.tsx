import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Layout } from "./components/Layout/Layout";
import { Main } from "./components/Main/Main";
import { Uncontrolled } from "./components/Uncontrolled/Uncontrolled";
import { Controlled } from "./components/Controlled/Controlled";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='uncontrolled' element={<Uncontrolled />} />
            <Route path='controlled' element={<Controlled />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
