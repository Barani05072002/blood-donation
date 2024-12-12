import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import Navbar from "./Navbar";

const BloodBanks = () => {
  const [bloodBanks, setBloodBanks] = useState([
    { name: "City Blood Bank", location: "Downtown", contact: "123-456-7890" },
    { name: "HealthCare Blood Center", location: "Uptown", contact: "987-654-3210" },
  ]);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [newBloodBank, setNewBloodBank] = useState({ name: "", location: "", contact: "" });

  // Check if the user is an admin
  // const isAdmin = localStorage.getItem("role") === "admin";
  const isAdmin = true;

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBloodBank((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setBloodBanks([...bloodBanks, newBloodBank]);
    setNewBloodBank({ name: "", location: "", contact: "" });
    handleCloseDialog();
  };

  const handleDelete = (index) => {
    const updatedBloodBanks = bloodBanks.filter((_, idx) => idx !== index);
    setBloodBanks(updatedBloodBanks);
  };

  return (
    <>
      <Navbar />
      
      {/* Add Blood Bank Button (only visible for admin) */}
      {isAdmin && (
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 2 }}
          onClick={handleOpenDialog}
          style={{width:'97vw'}}
        >
          Add Blood Bank
        </Button>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Contact</TableCell>
              {isAdmin && <TableCell>Actions</TableCell>} {/* Actions column for delete button */}
            </TableRow>
          </TableHead>
          <TableBody>
            {bloodBanks.map((bank, index) => (
              <TableRow key={index}>
                <TableCell>{bank.name}</TableCell>
                <TableCell>{bank.location}</TableCell>
                <TableCell>{bank.contact}</TableCell>
                {isAdmin && (
                  <TableCell>
                    <IconButton color="error" onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Blood Bank Creation */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Create New Blood Bank</DialogTitle>
        <DialogContent>
          <TextField
            label="Blood Bank Name"
            name="name"
            value={newBloodBank.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={newBloodBank.location}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contact"
            name="contact"
            value={newBloodBank.contact}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Blood Bank
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BloodBanks;
