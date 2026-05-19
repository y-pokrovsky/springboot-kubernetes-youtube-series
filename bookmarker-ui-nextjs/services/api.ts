import axios from "axios"
import {BookmarkResponse} from "./models";

const API_BASE_URL = "http://localhost:8080"

export const fetchBookmarks = async (page: number): Promise<BookmarkResponse> => {
    const res = await axios.get<BookmarkResponse>(`${API_BASE_URL}/api/bookmarks?page=${page}`)
    return res.data
}