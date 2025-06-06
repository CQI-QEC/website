import "./index.css"

import { App } from "./App"
import { Route, Router } from "@solidjs/router"
import { render } from "solid-js/web"
import { lazy } from "solid-js"

declare global {
    interface Navigator {
        connection?: {
            // Currently this feature is only available Chrome/Opera/Edge
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data
            saveData?: boolean
        }
    }
}

const Home = lazy(() => import("./routes/Home"))
const NotFound = lazy(() => import("./routes/NotFound"))
const Competition = lazy(() => import("./routes/Competitions"))
const Team = lazy(() => import("./routes/Team"))
const Partners = lazy(() => import("./routes/Partners"))
const Documents = lazy(() => import("./routes/Documents"))
const Login = lazy(() => import("./routes/Login"))
const Dashboard = lazy(() => import("./routes/Dashboard"))
const AdditionalForm = lazy(() => import("./routes/AdditionalForm"))
const ListParticipant = lazy(() => import("./routes/ListParticipant"))
const ChangePassword = lazy(() => import("./routes/ChangePassword"))
const ForgottenPassword = lazy(() => import("./routes/ForgottenPassword"))
const ParticipantInfo = lazy(() => import("./routes/ParticipantInfo"))
const IndividualPartner = lazy(() => import("./routes/IndividualPartner"))

const app = document.getElementById("app")
if (app) {
    render(
        () => (
            <Router root={App}>
                <Route path="/" component={Home} />
                <Route path="/competitions" component={Competition} />
                <Route path="/team" component={Team} />
                <Route path="/partners" component={Partners} />
                <Route path="/documents" component={Documents} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/additional-form" component={AdditionalForm} />
                <Route path="/partners/:name" component={IndividualPartner} />
                
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/list-participant" component={ListParticipant} />
                <Route
                    path="/change-password/:token?"
                    component={ChangePassword}
                /> */}
                {/* <Route
                    path="/forgotten-password"
                    component={ForgottenPassword}
                /> */}
                {/* <Route
                    path="/participant-info/:id"
                    component={ParticipantInfo}
                /> */}

                <Route path="*" component={NotFound} />
            </Router>
        ),
        app,
    )
}
