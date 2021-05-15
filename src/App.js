import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import UserList from './components/UserList'
import Expand from './components/Expand'
import {GroupMessageContainer} from "./components/GroupMessageContainer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/:userId">
                    <div className="App">
                        <UserList/>
                        <GroupMessageContainer />
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
