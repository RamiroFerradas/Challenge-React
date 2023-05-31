"use client";
import { useEffect, useState } from "react";
import { useGridApiRef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "@/app/redux/slices";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

import { Person } from "@/app/models/people";
import { UseFetchPeople } from "@/app/hooks";
import { AppStore } from "@/app/models";
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const FavoriteTable = () => {
  const pageSize = 5;
  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const colums = [
    {
      headerName: "Delete all",
      field: "actions",
      type: "actions",
      sortable: false,
      width: 50,

      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <DeleteIcon />
            </IconButton>
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
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <DataGrid
      rows={stateFavorites}
      columns={colums}
      disableColumnSelector
      // disableSelectionOnClick
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize,
          },
        },
      }}
      pageSizeOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;
