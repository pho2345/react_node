import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import './UserList.css';
import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Warpper from "../../Warpper/Warpper";

function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'username', headerName: 'Username', width: 200,
        renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      );
    },
  
  
  },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <IconButton edge="end" aria-label="delete" className="userListDelete"
              onClick={() => handleDelete(params.row.id)}>                      
            <DeleteIcon />
             </IconButton>
          </>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, username: 'Snow', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png', email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 2, username: 'Snow1', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png',email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 3, username: 'Snow2', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png',email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 4, username: 'Snow3', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png', email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 5, username: 'Snow4', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png', email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 6, username: 'Snow5', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png',email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 7, username: 'Snow6', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png',email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 8, username: 'Snow7', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png', email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
    { id: 9, username: 'Snow8', avatar: 'https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png', email: 'via@gmail.com', status: 'active' , transaction: '$120.00' },
  ];
  return (
    <div className='UserList'>
    <Warpper/>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
export default UserList;