import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import bg from '../images/blood.jpg';

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: 345,
  margin: theme.spacing(2),
  boxShadow: theme.shadows[8],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[12],
  },
}));

const DonationEvents = () => {
  const [events, setEvents] = useState([
    { title: "Blood Drive 2024", date: "Jan 20, 2024", location: "Community Center" },
    { title: "Emergency Donation Camp", date: "Feb 10, 2024", location: "City Hall" },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "" });

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
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", location: "" });
    handleCloseDialog();
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, idx) => idx !== index);
    setEvents(updatedEvents);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "72vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: 4,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            marginBottom: 4,
          }}
        >
          Donation Events
        </Typography>

        {/* Add Event Button (only visible for admin) */}
        {isAdmin && (
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: 3 }}
            onClick={handleOpenDialog}
          >
            Add Event
          </Button>
        )}

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {events.map((event, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <StyledCard>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#1a237e", fontWeight: "bold" }}
                  >
                    {event.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#424242" }}>
                    <strong>Date:</strong> {event.date}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#424242" }}>
                    <strong>Location:</strong> {event.location}
                  </Typography>
                </CardContent>

                {/* Delete Button (only visible for admin) */}
                {isAdmin && (
                  <Box sx={{ padding: 2 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      fullWidth
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </Box>
                )}
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Event Creation Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Create New Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Event Title"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Event Date"
            name="date"
            type="date"
            value={newEvent.date}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Event Location"
            name="location"
            value={newEvent.location}
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
            Add Event
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DonationEvents;
