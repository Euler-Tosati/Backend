import { Router } from "express";
import { MessagesController } from "./controles/MessagesController";
import { SettingsController } from "./controles/SettingsController";
import { UsersController } from "./controles/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();
//**routes params, queryparams, body params */
routes.post("/settings",settingsController.create);
routes.get("/settings/:username",settingsController.findByUsername);
routes.put("/settings/:username",settingsController.update);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };