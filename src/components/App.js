import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import ManageAccedeForm from "./accede/ManageAccedeForm";
import AboutPage from "./about/AboutPage";
import Header from "./header/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import AuthorsPage from "./authors/AuthorsPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import ManageAuthorForm from "./authors/ManageAuthorForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/accede" component={ManageAccedeForm} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/editAuthors/:id" component={ManageAuthorForm} />
        <Route path="/editAuthors" component={ManageAuthorForm} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
