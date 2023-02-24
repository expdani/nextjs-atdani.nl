import { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Default from './Default';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading</h1>} />
      <Routes>
        <Route path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/blog">
          <h1>Blog</h1>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
