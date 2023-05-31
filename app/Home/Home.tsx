import { useSelector } from "react-redux";
import { useFavorites } from "../hooks";
import { PeopleTable } from "./components";

const Home = () => {
  return <PeopleTable />;
};

export default Home;
