import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Navbar from "./Navbar";

const BloodBanks = () => {
  const bloodBanks = [
    { name: "City Blood Bank", location: "Downtown", contact: "123-456-7890" },
    { name: "HealthCare Blood Center", location: "Uptown", contact: "987-654-3210" },
  ];

  return (
    <>
    <Navbar/>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bloodBanks.map((bank, index) => (
            <TableRow key={index}>
              <TableCell>{bank.name}</TableCell>
              <TableCell>{bank.location}</TableCell>
              <TableCell>{bank.contact}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default BloodBanks;
