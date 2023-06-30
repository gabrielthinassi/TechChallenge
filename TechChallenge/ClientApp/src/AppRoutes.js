import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ListUser from "./components/ListUser";
import AddUser from "./components/AddUser";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
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
