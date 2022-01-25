import axios from "axios";

const BASE_URL="http://localhost:8000/api/";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest=axios.create({
    baseURL:BASE_URL
});

export const userRequest=axios.create({
     baseURL:"http://localhost:8000/api/",
    headers:{token:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTEzMWIwYzFlODU3NWYzZmM0ZDhlNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzA5OTM3MywiZXhwIjoxNjQzMzU4NTczfQ.uOwy1VEQ8nmmlJa0LXFZ0t4zB0LQ-ZegejxBdYkNDMY`}
});