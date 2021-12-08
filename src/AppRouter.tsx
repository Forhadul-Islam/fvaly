/* eslint-disable react/prop-types */
import { ProductDetails } from "pages/ProductDetails/ProductDetails"
import React, { Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./components/common/Header/Header"

const Home = React.lazy(() => import("./pages/Home/Home"))
const Help = React.lazy(() => import("./pages/Help/Help"))
const Auth = React.lazy(()=> import("./pages/Auth/Auth"))
const Checkout = React.lazy(()=> import("./pages/Checkout/Checkout"))

const AppRouter: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Suspense fallback={<div>Loading....</div>}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/help" component={Help} />
                        <Route
                            exact
                            path="/product/:id"
                            component={ProductDetails}
                        />
                        <Route exact path="/auth" component={Auth} />
                        <Route exact path="/checkout" component={Checkout} />
                    </Suspense>
                </Switch>
            </Router>
        </>
    )
}

export default AppRouter
