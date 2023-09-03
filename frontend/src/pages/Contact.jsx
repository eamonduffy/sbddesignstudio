import React from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

import "../App.css";

const Contact = () => {
    const customFontStyle = {
        fontFamily: "RobotoSlab",
    };

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, email, phone, projectType, buildType, projectDetails } =
            data;

        const mailToLink = `mailto:sbreitungduffy@aol.com?subject=Contact Request&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AProject Type: ${projectType}%0ABuild Type: ${buildType}%0AProject Details: ${projectDetails}`;

        // Open the default email client with pre-filled content
        window.location.href = mailToLink;
    };

    return (
        <Container>
            <Typography variant="h4" style={customFontStyle} sx={{ mb: 2 }}>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name *"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.name}
                                    helperText={
                                        errors.name && "Name is required"
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, pattern: /^\S+@\S+$/i }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email *"
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.email}
                                    helperText={
                                        errors.email
                                            ? "Enter a valid email address"
                                            : ""
                                    }
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>Project Type</InputLabel>
                            <Controller
                                name="projectType"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field}>
                                        <MenuItem value="commercial">
                                            Commercial
                                        </MenuItem>
                                        <MenuItem value="residential">
                                            Residential
                                        </MenuItem>
                                        <MenuItem value="institutional">
                                            Institutional
                                        </MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>
                                Is this a new build or a renovation?
                            </InputLabel>
                            <Controller
                                name="buildType"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select {...field}>
                                        <MenuItem value="new">
                                            New Build
                                        </MenuItem>
                                        <MenuItem value="renovation">
                                            Renovation/Addition
                                        </MenuItem>
                                        <MenuItem value="both">Both</MenuItem>
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="projectDetails"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Other project details"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default Contact;
