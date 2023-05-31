"use client";

export type NavbarProps = {};
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { CustomDialog } from "../CustomDialog";
import { FavoriteTable } from "./FavoriteTable";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";

const handleClick = () => {
  dialogOpenSubject$.setSubject = true;
};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Challenge React + typescript
          </Typography>
          <IconButton
            color="secondary"
            aria-label="favorites"
            component="label"
            onClick={handleClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
