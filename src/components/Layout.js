import React from "react";
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate, } from "react-router-dom";

export default function Layout({ children }) {
  const nav = useNavigate();
  const loc = useLocation();

  const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Drawer
        sx={{
          width: 240,
        }}
        PaperProps={{
          sx: { width: 240 },
        }}
        anchor="left"
        variant="permanent"
      >
        <div>
          <Typography varient="h5" sx={{padding:2}}>Ninja Drawer</Typography>
        </div>
        <List>
        {menuItems.map((item)=>(
            <ListItem
            button
            key={item.text}
            onClick={()=>nav(item.path)}
            sx={{
              background: loc.pathname === item.path ? '#f4f4f4' : null
            }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                {item.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>

      </Drawer>

      <div
        style={{
          background: "#f9f9f9",
          width: "100%",
          padding:1,
          margin:10
        }}
      >
        {children}
      </div>
    </div>
  );
}
