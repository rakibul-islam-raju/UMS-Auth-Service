import express, { Application, Response, Request } from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/user/user.route";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/v1/users", userRoutes);

// test endpoint
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

//global error handler
app.use(globalErrorHandler);

export default app;
