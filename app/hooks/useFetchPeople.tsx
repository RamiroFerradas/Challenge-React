import { People } from "@/app/data";
import { Person } from "@/app/models/people";
import { addPeople } from "@/app/redux/slices";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppStore } from "../models/appstore";

const useFetchPeople = (): { people: Person[] } => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  const people = useSelector((state: AppStore) => state.people);

  return { people };
};

export default useFetchPeople;
