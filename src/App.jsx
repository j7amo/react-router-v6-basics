import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* In React Router v6 we now use <Routes/> instead of <Switch/> */}
        <Routes>
          {/* if we want to do something like this in v6 */}
          {/* <Route path="/" exact> */}
          {/*  <Redirect to="/welcome" /> */}
          {/* </Route> */}
          {/* then we need to write like this (<Redirect/> is no
          longer in React Router package): */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          {/* In v6 we now move JSX element that we want to be rendered
           when route matches to an 'element' prop instead of 'children' */}
          {/* If we plan to build NESTED Routes under some PARENT Route
           then we need to add '/*' to PARENT Route's 'path'.
           It will 'switch' Route's matching mode from 'exact' ("equals") to
           non-strict ("starts with"). So the <Welcome/> component will be
            rendered everytime the URL path starts with "/welcome" */}
          <Route path="/welcome/*" element={<Welcome />}>
            {/* Nested Route's 'path' attribute should now contain ONLY part
         which is ADDED to PARENT 'path' because nested 'path' is now relative:
         Instead of using '/welcome/new-user' we now use 'new-user' and
         it is enough for React Router v6 to construct the correct path */}
            {/* in v6 we can do ALL the route NESTING inside one file
            by wrapping <Route/> with <Route/> (this can have any number
            of nesting we want).
             p.s. The ONLY component in v6 allowed to be wrapped by <Route/>
             is... <Route/>! No more wrapping any component we want */}
            <Route path="new-user" element={<p>Welcome, new user!</p>} />
          </Route>
          {/* In v6 we now don't care about either Routes order or
           'exact' prop (because Routes are now matched with 'exact' by default)!
           The new algorithm will pick the best match for us.
           So in this case '/products' WILL NOT match '/products/42' (which was not true fo v5) */}
          <Route path="/products" element={<Products />} />
          {/* In v6 the new algorithm can also distinguish between these 2 URLs:
          - for '/products/42' <Route path='/products'/> will match
          - for '/products/edit' <Route path='/products/edit'/> will match.
           Which was not true for v5, and we had to place these Routes in specific order */}
          <Route path="/products/:productId" element={<ProductDetail />} />
          {/* <Route path="/products/edit" element={<EditProduct />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
