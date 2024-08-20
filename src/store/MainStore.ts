import { create } from "zustand";
import AxiosApiClient from "../api_connection/ApiClient";
import { Post } from "../domain/Post";
import { PostService } from "../services/PostService";
import { NewPostInput } from "../domain/NewPostInput";

interface MainState {
    allPosts: Post[],
    fetchAllPosts: () => Promise<Post[]>,
    addPost: (post: NewPostInput) => void
}

const apiClient = new AxiosApiClient();
const postService = new PostService(apiClient);

const useMainStore = create<MainState>((set, get) => ({
    allPosts: [],
    fetchAllPosts: async () => {
        const allPosts = await postService.getAllPosts();
        set({ allPosts: allPosts });
        return allPosts;
    },
    addPost: async (post: NewPostInput) => {
        const response = await postService.addPost(post);
        get().fetchAllPosts();
        return response;
    }
}));

export default useMainStore;
