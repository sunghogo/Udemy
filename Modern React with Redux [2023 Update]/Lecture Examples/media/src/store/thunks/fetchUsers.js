import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action type: users/fetch/pending OR fulfilled OR rejected
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  return response.data;
});

export { fetchUsers };
