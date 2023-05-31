"use client";
import { useEffect, useState } from "react";
import { useGridApiRef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/app/redux/slices";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

import { Person } from "@/app/models/people";
import { UseFetchPeople } from "@/app/hooks";
import { AppStore } from "@/app/models";
import { Checkbox } from "@mui/material";

const PeopleTable = () => {
  const dispatch = useDispatch();
  const apiRef = useGridApiRef();

  const { people } = UseFetchPeople();
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  const favoritePeople = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const isPersonInFavorites = findPerson(person);

    if (isPersonInFavorites) {
      const filteredPeople = filterPerson(person);
      dispatch(removeFavorite(person));
      setSelectedPeople(filteredPeople);
    } else {
      const updatedPeople = [...selectedPeople, person];
      dispatch(addFavorite(updatedPeople));
      setSelectedPeople(updatedPeople);
    }
  };
  const pageSize: number = 5;
  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Companies",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level Of Happiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  const selectRowsByIds = (ids: any) => {
    ids.forEach((id: number) => {
      apiRef.current.selectRow(id, true);
    });
  };

  return (
    <DataGrid
      apiRef={apiRef}
      className="h-[80vh] w-[80vw]"
      disableColumnSelector
      disableRowSelectionOnClick
      columns={columns}
      rows={people}
      getRowId={(row: any) => row.id}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize,
          },
        },
      }}
      pageSizeOptions={[pageSize]}
      // checkboxSelection
      // onStateChange={(state) => handleChangue(state)}
    />
  );
};

export default PeopleTable;
