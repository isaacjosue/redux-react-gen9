import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout";
import MainPage from "./containers/MainPage";
import Loading from "./components/Loading";
import Empty from "./components/Empty";
const FavoritesPage = lazy(() => import("./containers/FavoritesPage"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/favorites">
            <Suspense fallback={<Loading />}>
              <FavoritesPage />
            </Suspense>
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="*">
            <Empty />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
