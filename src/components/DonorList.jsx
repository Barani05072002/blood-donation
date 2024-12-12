import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";

const DonorList = () => {
  const [donors, setDonors] = useState([
    { name: "John Doe", email: "johndoe@example.com", bloodType: "A+", location: "Downtown" },
    { name: "Jane Smith", email: "janesmith@example.com", bloodType: "O+", location: "Uptown" },
  ]);

  const handleDelete = (index) => {
    const updatedDonors = donors.filter((_, idx) => idx !== index);
    setDonors(updatedDonors);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Blood Type</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donors.map((donor, index) => (
            <TableRow key={index}>
              <TableCell>{donor.name}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>{donor.bloodType}</TableCell>
              <TableCell>{donor.location}</TableCell>
              <TableCell>
                <IconButton color="error" onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonorList;
