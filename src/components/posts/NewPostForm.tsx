import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import useMainStore from "../../store/MainStore";

function NewPostForm() {
    const { addPost } = useMainStore();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        addPost({ title: title, content: content });
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 2 }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Create New Post
                </Typography>

                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <TextField
                    label="Content"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default NewPostForm;