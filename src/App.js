import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import UserList from './components/UserList'
import Chat from './components/Chat'
import Expand from './components/Expand'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:userId">
                    <div className="App">
                        <UserList/>
                        <Chat/>
                        <Expand/>
                    </div>
                </Route>
                <Route path="/">
                    <div className="App">
                        <UserList/>
                    </div>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
