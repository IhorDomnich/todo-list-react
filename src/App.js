import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/AuthorPage";
import Tasks from "./features/tasks/tasksPage";
import Task from "./features/tasks/tasksPage/TaskPage";
import {toAuthor, toTasks, toTask} from "./routes";
import Navigation from "./Navigatoin";


export default () => (
    <HashRouter>
       <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <Task />
                </Route>
                <Route path={toTasks()}>
                    <Tasks />
                </Route>
                <Route path={toAuthor()}>
                    <Author />
                </Route>
                <Route>
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
    </HashRouter>
);