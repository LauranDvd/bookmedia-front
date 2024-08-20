import { Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { Post } from "../../domain/Post";

interface OnePostProps {
    post: Post
}

function OnePost(postProps: OnePostProps) {
    const post = postProps.post;

    return (
        <Card sx={{ margin: '20px auto' }}>
            <CardHeader
                title={post.authorId}
                subheader={post.creationTime}
                sx={{ backgroundColor: '#f5f5f5' }}
            />
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default OnePost;