import express from "express";
import http from 'http'
import {Server} from 'socket.io'

const app = express()

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: "http://localhost:3000"}})

const port = process.env.PORT || 5000

server.listen(port, () => console.log(`Server started on port ${port}`))