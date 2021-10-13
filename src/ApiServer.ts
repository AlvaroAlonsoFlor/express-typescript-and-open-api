import express from "express";
import { Server } from "http";
import RouteSlice from "./routes/RouteSlice";


const app = express();

export default class ApiServer {

    name: string;
    port: number;
    basePath: string
    server: Server | Promise<Server> | null = null;
    routes: Array<RouteSlice>;

    constructor (name: string, port: number, basePath: string, routes: Array<RouteSlice>) {
        this.name = name;
        this.port = port;
        this.basePath = basePath;
        this.routes = routes
    }

    start() {
        app.get(this.basePath, (req, res) => res.send(`${this.name} application home`));
        this.mountRoutes()

        this.server = app.listen(this.port, () => {
        console.log(`[server]: ${this.name}  is running at https://localhost:${this.port}`);
        });

        process.on('SIGTERM', () => {
            console.log(`SIGTERM signal received: closing HTTP ${this.name} server at port ${this.port}`)
            this.stop()
        })
    }

    async stop() {
        if (this.server instanceof Server) {
            return await this.server.close(() => {
                console.log(`${this.name} server closed`)
            })
        }

        throw new Error('No server found')
    }

    private mountRoutes(): void {
        this.routes.forEach((route: RouteSlice) => {
            app.use(this.basePath + route.path, route.router)
        })
    }
}