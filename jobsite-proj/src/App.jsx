import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Description from './pages/Description';
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { Link } from 'react-router-dom';
import JobPost from './Components/JobPost';
import PostedJobs from './pages/PostedJobs';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/jobs/:id" element={<Description />} />
            <Route path="/post-job" element={<JobPost />} />
            <Route path="/posted-jobs" element={<PostedJobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
};

export default App;