import { NoteInterface } from "@interfaces";
import { MenuOutlined } from "@mui/icons-material";
import { Drawer, List } from "@mui/material";
import { RootState } from "@store";
import { SideBarItem } from "components/SideBar/SideBarItem";
import { useState } from "react";
import { useSelector } from "react-redux";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);

  const { notes } = useSelector((state: RootState) => state.journal);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div>
      <MenuOutlined onClick={() => toggleDrawer(true)} />
      <Drawer
        open={open}
        sx={{
          boxSizing: "border-box",
        }}
        onClose={() => toggleDrawer(false)}
      >
        <List
          sx={{
            width: 280,
          }}
        >
          {notes.map((item: NoteInterface) => (
            <div key={item.id} onClick={() => toggleDrawer(false)}>
              <SideBarItem {...item} />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
