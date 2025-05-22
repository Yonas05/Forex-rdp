import { useState } from 'react';
import { AppBar, Toolbar, Typography, createTheme, Menu, MenuItem, InputBase, Button, Box, IconButton, ThemeProvider } from '@mui/material';
import { Search, ExpandMore, Home, AccountCircle } from '@mui/icons-material';

// Import your logo image
import logo from './assets/Images/coop-logo.png'; // Adjust the path to your logo image

const theme = createTheme({
    typography: {
        fontFamily: "'Ubuntu', sans-serif",
        fontSize: 10,
    },
});

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoriesAnchorEl, setCategoriesAnchorEl] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Categories');

    const handleCategoryMenuOpen = (event) => setCategoriesAnchorEl(event.currentTarget);
    const handleCategoryMenuClose = () => setCategoriesAnchorEl(null);
    const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleProfileMenuClose = () => setAnchorEl(null);
    const handleSearchChange = (event) => setSearchQuery(event.target.value);
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        handleCategoryMenuClose();
    };

    return (
        <ThemeProvider theme={theme}>
            {/* Fixed Navbar */}
            <AppBar 
                position="sticky" 
                sx={{ 
                    backgroundColor: "white", 
                    boxShadow: "none", 
                    borderBottom: "3px solid skyblue", // Sky blue bottom border
                    width: "100%" // Adjust width so it stays aligned
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {/* Logo */}
                    <Box component="img" src={logo} alt="JMART Logo" sx={{ height: 40, marginRight: 2 }} />

                    {/* Brand Name */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", textDecoration: "none" }}>
                        Forex Team
                    </Typography>

                    {/* Search Box */}
                    <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: 1, padding: "0 8px", border: "1px solid grey", width: "300px" }}>
                        <Search sx={{ color: "gray" }} />
                        <InputBase placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} sx={{ marginLeft: 1 }} />
                    </Box>

                    {/* Categories Dropdown */}
                    <Button sx={{ color: "black", marginLeft: 2, fontWeight: 'bold' }} endIcon={<ExpandMore />} onClick={handleCategoryMenuOpen}>
                        {selectedCategory}
                    </Button>
                    <Menu anchorEl={categoriesAnchorEl} open={Boolean(categoriesAnchorEl)} onClose={handleCategoryMenuClose}>
                        <MenuItem onClick={() => handleCategorySelect("individual")}>Individual Customer Traveler</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Institution")}>Institutional Customer Traveler</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("business")}>Business Travelers</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("Education")}>Educational Travelers</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect("medical")}>Medical Travelers</MenuItem>
                    </Menu>

                    {/* Pending/Approved/Processed Request Text */}
                    <Box sx={{ display: "flex", alignItems: "center", color: "black" }}>
                        <Home />
                        <Typography variant="body2" sx={{ marginLeft: 1, color: "black", fontWeight: 'bold' }}>Pending Request</Typography>
                        <Typography variant="body2" sx={{ marginLeft: 2, color: "black", fontWeight: 'bold' }}>Approved Request</Typography>
                        <Typography variant="body2" sx={{ marginLeft: 2, color: "black", fontWeight: 'bold' }}>Processed Request</Typography>
                    </Box>

                    {/* Profile Icon */}
                    <IconButton sx={{ color: "black", marginLeft: 2 }} onClick={handleProfileMenuOpen}>
                        <AccountCircle />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleProfileMenuClose}>
                        <MenuItem onClick={handleProfileMenuClose}>Sign In</MenuItem>
                        <MenuItem onClick={handleProfileMenuClose}>Register</MenuItem>
                        <MenuItem onClick={handleProfileMenuClose}>Log Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
