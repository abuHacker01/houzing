import Contacts from "../components/Contact";
import useId from "../hooks/useid";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";
const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    hidden: false,
    prived: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    hidden: false,
    prived: false,
  },
  {
    id: useId,
    element: <Contacts />,
    title: "Contacts",
    path: "/contacts",
    hidden: false,
    prived: false,
  },
  {
    id: useId,
    element: <h1>Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    hidden: true,
    prived: false,
  },
];

export default navbar;
