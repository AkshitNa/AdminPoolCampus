// App.js
import { createBrowserRouter, RouterProvider, Outlet, Navigate, ScrollRestoration } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context API
import { useMyData } from './Context/Provider';

// Front-Page-Home-Page
import Home from './ConnectComponent/Home';

// Admin-Connect
import AdminConnectMain from './AdminConnectComponents/AdminConnectMain';

// Campus-Connect
import PoolCampusMain from './PoolCampusComponents/PoolCampusMain';

// Pages 01
import { HomeCampusImg, AlumniWork, Drives, AboutCampus } from './PoolCampusComponents/Home/ZZHomeIndex';

// Pages 02
import { Error, Blog, About } from './AdminConnectComponents/IndexComp';
import ContactUs from './AdminConnectComponents/Home/ContactUs';
import {
  Header,
  HomePageImg,
  TopRank,
  Industry,
  PrePlacementCourses,
  ExploreAllCourses,
  ReviewCard,
  ConsultationForm,
  Footer,
} from './AdminConnectComponents/Home/ZHomeIndex';

// CampusBlog
import { BlogCampus, TipsBlog } from './PoolCampusComponents/BlogsCampus/indexAI';

// Languages
import AccountInfo from './AdminConnectComponents/AccountInfo';
import Profile from './AdminConnectComponents/Profile';
import Purchases from './AdminConnectComponents/Purchases';
import Languages from './AdminConnectComponents/Languages';

// Blogs Pages
import { AIBlog } from './AdminConnectComponents/Blogs/indexAI';

// Map
import NovaNectarMap from './AdminConnectComponents/Home/NovaNectarMap';

// AppLayout Component
const AppLayout = () => (
  <div>
    <ScrollRestoration /> {/* To get to top */}
    <Header />
    <ToastContainer position="top-center" draggable={true} toastStyle={{ marginTop: '100px' }} />
    <main>
      <Outlet /> {/* Populate our other pages and components */}
    </main>
    <Footer />
  </div>
);

//Protected Routes
const ProtectedRoute = ({children}) => {
  const authorization = useMyData();
  return authorization.register ? children : <Navigate to="/" />;
  };

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AdminConnect",
    element: <AppLayout />,
    children: [
      {
        path: "/AdminConnect",
        element: (
          <>
            {" "}
            <HomePageImg />
            <TopRank />
            <PrePlacementCourses />
            <Industry />
            <ReviewCard />
          </>
        ),
      },
    ],
  },
  {
    path: "/exploreAllCourses",
    element: <AppLayout />,
    children: [
      {
        path: "/exploreAllCourses",
        element: (
          <>
            <ExploreAllCourses />
          </>
        ),
      },
    ],
  },
  {
    path: "/AdminConnectMain",
    element: <AppLayout />,
    children: [
      {
        path: "/AdminConnectMain",
        element: (
          <>
            {" "}
            <AdminConnectMain />
            <TopRank />
            <PrePlacementCourses />
            <ConsultationForm />
          </>
        ),
      },
    ],
  },
  {
    path: "/contactUs",
    element: <AppLayout />,
    children: [
      {
        path: "/contactUs",
        element: (
          <>
            {" "}
            <ContactUs />
            <NovaNectarMap />
          </>
        ),
      },
    ],
  },
  {
    path: "/blog",
    element: <AppLayout />,
    children: [
      {
        path: "/blog",
        element: (
          <>
            {" "}
            <Blog />
          </>
        ),
      },
    ],
  },
  {
    path: "/ai",
    element: <AppLayout />,
    children: [
      {
        path: "/ai",
        element: (
          <>
            {" "}
            <AIBlog />
          </>
        ),
      },
    ],
  },
  {
    path: "/about",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: (
          <>
            {" "}
            <About />
          </>
        ),
      },
    ],
  },
  {
    path: "/UserAccountInfo",
    element: <AppLayout />,
    children: [
      {
        path: "/UserAccountInfo",
        element: <> <ProtectedRoute> <AccountInfo/> </ProtectedRoute>  </> 
      },
    ],
  },
  {
    path: "/UserEditprofile",
    element: <AppLayout />,
    children: [
      {
        path: "/UserEditprofile",
        element: <> <ProtectedRoute> <Profile/> </ProtectedRoute>  </> 
      },
    ],
  },
  {
    path: "/UserPurchases",
    element: <AppLayout />,
    children: [
      {
        path: "/UserPurchases",
        element: (
          <>
            {" "}
            <> <ProtectedRoute> <Purchases /> </ProtectedRoute>  </>
          </>
        ),
      },
    ],
  },
  {
    path: "/UserLanguage",
    element: <AppLayout />,
    children: [
      {
        path: "/UserLanguage",
        element: (
          <>
            {" "}
            <ProtectedRoute> <Languages /> </ProtectedRoute> 
          </>
        ),
      },
    ],
  },
  // Pool-Campus
  {
    path: "/CampusConnect",
    element: <AppLayout />,
    children: [
      {
        path: "/CampusConnect",
        element: (
          <>
            {" "}
            <HomeCampusImg />
            <AlumniWork />
            <Drives />
            <Industry />
            <ReviewCard />
          </>
        ),
      },
    ],
  },
  {
    path: "/PoolCampusMain",
    element: <AppLayout />,
    children: [
      {
        path: "/PoolCampusMain",
        element: (
          <>
            {" "}
            <PoolCampusMain />
            <AlumniWork />
            <Drives />
            <ConsultationForm />
          </>
        ),
      },
    ],
  },
  {
    path: "/aboutCampus",
    element: <AppLayout />,
    children: [
      {
        path: "/aboutCampus",
        element: (
          <>
            {" "}
            <AboutCampus />
          </>
        ),
      },
    ],
  },
  {
    path: "/blogCampus",
    element: <AppLayout />,
    children: [
      {
        path: "/blogCampus",
        element: (
          <>
            {" "}
            <BlogCampus />
          </>
        ),
      },
    ],
  },
  {
    path: "/TipsBlog",
    element: <AppLayout />,
    children: [
      {
        path: "/TipsBlog",
        element: (
          <>
            {" "}
            <AIBlog />
          </>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);


// Main App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
