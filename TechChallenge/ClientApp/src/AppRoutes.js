import { Home } from "./components/Home";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/users',
    element: <ListUser />
  },
  {
    path: '/usersadd',
    element: <AddUser />
  }
];

export default AppRoutes;
