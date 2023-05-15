import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import AddIcon from "@mui/icons-material/Add";


 const theme = createTheme({
  
 });



const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Add Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <ThemeProvider theme={theme}>
        <div>
          <Container maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#1976D2" }}>
                <NoteAddOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Add Note
              </Typography>

              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  variant="filled"
                  id="title"
                  label="Title"
                  autoComplete="title"
                  name="title"
                  type="text"
                  value={note.title} 
                  onChange={onChange}
                  inputProps={{
                    style: { color: "white", fontFamily: "cursive" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  variant="filled"
                  label="Description"
                  id="description"
                  type="text"
                  name="description"
                  value={note.description}
                  onChange={onChange}
                  inputProps={{
                    style: { color: "white", fontFamily: "cursive" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }}
                />
                <TextField
                  margin="normal"
                  // sx={{ input: { color: 'white' } }}
                  fullWidth
                  variant="filled"
                  label="Tag"
                  id="tag"
                  name="tag"
                  type="text"
                  value={note.tag}
                  onChange={onChange}
                  inputProps={{
                    style: { color: "white", fontFamily: "cursive" },
                  }}
                  sx={{
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "white" },
                    },
                  }}
                />

                <Button
                  disabled={
                    note.title.length < 5 || note.description.length < 5
                  }
                  onClick={handleClick}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
          </Container>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default AddNote;

