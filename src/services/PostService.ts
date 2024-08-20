import { IApiClient } from "../api_connection/IApiClient";
import { Post } from "../domain/Post";

export class PostService {
    private apiClient: IApiClient;

    constructor(apiClient: IApiClient) {
        this.apiClient = apiClient;
    }

    public async getAllPosts(): Promise<Post[]> {
        return this.apiClient.get("/posts");
    }
}
