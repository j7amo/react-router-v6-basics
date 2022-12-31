import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <h1>The Welcome Page</h1>
      {/* <Link/>'s 'to' prop is now ALSO RELATIVE to parent path */}
      <Link to="new-user">To new user</Link>
      {/* But there's a caveat: if we want to move to completely different
       non-nested route (e.g. to '/products') then we have to use '/' at the beginning of path */}
      <Link to="products">To Products</Link>
      {/* in v6 wrapping nested Route with Routes component is MANDATORY  */}
      {/* in v6 we can change the approach for NESTING routes and completely move
      nested route to the main route definition file (which is App.jsx) */}
      {/* <Routes> */}
      {/*  <Route path="new-user" element={<p>Welcome, new user!</p>} /> */}
      {/* </Routes> */}
      {/* After we moved nested Route from this component to App.jsx
      there's one thing MISSING: React now simply doesn't know where exactly
      nested content should go inside <Welcome/> component!
      To show it to React we just need to use another(!) component - <Outlet/>.
      It serves as a placeholder/marker for nested content */}
      <Outlet />
    </>
  );
}

export default Welcome;
