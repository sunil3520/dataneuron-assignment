import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_BASE_URL } from "../../contant";

//API REQ TO ADD THE DATA

const AddData = createAsyncThunk("add/data", async (employedata) => {
  try {
    const data = await axios.post(`${BACKEND_BASE_URL}/add`, employedata);
    return data.data;
  } catch (err) {
    console.log(err, "err");
  }
});

const GetData = createAsyncThunk("get/data", async () => {
  try {
    const data = await axios.get(`${BACKEND_BASE_URL}`);
    return data.data;
  } catch (err) {
    console.log(err, "err");
  }
});

//API REQUEST TO UPDATE THE DATA
const UpdateData = createAsyncThunk("update/data", async ({ id, data }) => {
  try {
    const update = await axios.patch(
      `${BACKEND_BASE_URL}/update/${id}`,
      data
    );
    return update.data;
  } catch (err) {
    console.log(err, "err");
  }
});

//API REQ FOR GET THE DATA OF HOW MANY TIME ADDED OR UPDATED THE DATA
const count = createAsyncThunk("count/data", async () => {
  try {
    const countdata = await axios.get(`${BACKEND_BASE_URL}/count`);
    return countdata.data;
  } catch (err) {
    console.log(err, "err");
  }
});

export { AddData, GetData, UpdateData, count };
