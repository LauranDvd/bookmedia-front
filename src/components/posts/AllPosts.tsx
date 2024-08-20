import { Box } from "@mui/material";
import useMainStore from "../../store/MainStore";
import { useEffect } from "react";
import OnePost from "./OnePost";

function AllPosts() {
    const { allPosts, fetchAllPosts } = useMainStore();

    useEffect(() => {
        console.log(`why dont i see it`);
        fetchAllPosts();
        console.log("called fetch all posts");
    }, []);

    return (
        <Box>
            All posts:

            {allPosts.map((post) => (
                <Box>
                    <OnePost post={post}></OnePost>
                </Box>
            ))};

            <NewPostForm />
        </Box>
    )
}

export default AllPosts;