import express, { Application, Response, Request } from "express";
import cors from "cors";
import usersRoute from "./app/modules/users/users.route";
import { logger } from "./shared/logger";

const app: Application = express();

logger.info("infooooo");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/v1/users", usersRoute);

// test endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

export default app;
