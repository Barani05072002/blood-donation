import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import bg from '../images/blood.jpg';


const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%", // Ensure cards take full width in their grid cell
  height: "100%", // Match height for all cards
  maxWidth: 345, // Limit maximum width for consistent design
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
  const events = [
    { title: "Blood Drive 2024", date: "Jan 20, 2024", location: "Community Center" },
    { title: "Emergency Donation Camp", date: "Feb 10, 2024", location: "City Hall" },
  ];

  return (
    <>
    <Navbar/>
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
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default DonationEvents;
