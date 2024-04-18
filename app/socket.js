"use client";

import { io } from "socket.io-client";

const ENDPOINT = "localhost:3001";

export const socket = io(ENDPOINT, {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Credentials": true,
  },
});
