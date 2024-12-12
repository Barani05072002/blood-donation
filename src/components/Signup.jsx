import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import bg from '../images/blood.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  marginTop: theme.spacing(8),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
}));

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "97vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <StyledPaper>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{ marginTop: 2, padding: 1 }}
          >
            Signup
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Already have an account? <Link to="/">Login here</Link>
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default Signup;
