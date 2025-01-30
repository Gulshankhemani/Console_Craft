import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Headers from "../Section/Header.jsx"
import Home from "../Section/Home.jsx"
import Language from "../Pages/Language"
import Login from "../Pages/Login"
import Return_order from "../Pages/Return_order"
import PropTypes from "prop-types"

const Page_Component = ({ children }) => {
  return (
    <div>
      <Headers />
      <div>{children}</div>
    </div>
  )
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Page_Component>
            <Home />
          </Page_Component>
        }
        />
      <Route
        path="/home"
        element={
          <Page_Component>
            <Home />
          </Page_Component>
        }
        />
      <Route
        path="/language"
        element={
          <Page_Component>
            <Language />
          </Page_Component>
        }
        />
      <Route
        path="/login"
        element={
          <Page_Component>
            <Login />
          </Page_Component>
        }
        />
      <Route
        path="/return-order"
        element={
          <Page_Component>
            <Return_order />
          </Page_Component>
        }
        />
    </>,
  ),
)

Page_Component.propTypes = {
  children: PropTypes.node,
}

export default router 