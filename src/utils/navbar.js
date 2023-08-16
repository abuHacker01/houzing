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
    prived: false,
    hidden: false,
  },
  {
    id: useId,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    prived: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Contacts />,
    title: "Contacts",
    path: "/contacts",
    prived: false,
    hidden: false,
  },
];

export default navbar;
