import React from "react";
import { Switch, Route } from "react-router-dom";

// Component links
import Home from "../../fixedComponents/Home/Home";
import Projects from "../../fixedComponents/Projects/Projects";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import Contact from "../../fixedComponents/Contact/Contact";
import Profile from "../../fixedComponents/Profile/Profile";


const App = () =>
{
    return (
        <Switch>
            <Route path="/projects/:web" >
                <ProjectDetails pageLink="/projects/:web" />
            </Route>
            <Route path="/projects" >
                <Projects pageLink="/projects" />
            </Route>
            <Route path="/profile" >
                <Profile pageLink="/profile" />
            </Route>
            <Route path="/contact" >
                <Contact pageLink="/contact" />
            </Route>
            <Route path="/" exact >
                <Home pageLink="/" />
            </Route>
        </Switch>
    )
}

export default App;