import { Server } from 'http';
import express, { Request, Response, NextFunction } from 'express';

// import * as bodyParser from "body-parser";
// import express from "express";
// import { Routes } from "./routes";

class SignalingServer {
  private static instance: SignalingServer;

  public expressApp: express.Application;

  public count: number;

  public server: Server;
  // public routePrv: Routes = new Routes();

  constructor() {
    this.expressApp = express();
    this.count = 0;
    this.config();
    this.server = new Server();
    // this.routePrv.routes(this.app);
  }

  public start(): void {
    this.server = this.expressApp.listen(3000);
  }

  public stop(): void {
    this.server.close();
  }

  private config(): void {
    // support application/json type post data
    // this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    // this.app.use(bodyParser.urlencoded({ extended: false }));
    // responde with indented JSON string
    // this.app.set("json spaces", 2);
    this.expressApp.get('/', (req, res) => {
      console.log(this.count);
      this.count += 1;
      res.status(200);
      res.write('Hello World');
      res.send();
    });
    this.expressApp.get('/favicon.ico', (req, res) => {
      res.status(204);
      res.send();
    });
  }

  public static getInstance(): SignalingServer {
    if (!SignalingServer.instance) {
      SignalingServer.instance = new SignalingServer();
    }

    return SignalingServer.instance;
  }
}

export default SignalingServer.getInstance();
