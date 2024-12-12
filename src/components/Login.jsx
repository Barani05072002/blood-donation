import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper, Alert } from "@mui/material";
import { styled } from "@mui/material/styles";
import bg from '../images/blood.jpg';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  marginTop: theme.spacing(8),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
}));

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic (replace with API call if needed)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("auth", "true"); // Set auth flag
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
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
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          New user? <Link to="/signup">Create an account</Link>
        </Typography>
      </StyledPaper>
    </Box>
  );
};

export default Login;
