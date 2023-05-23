import { request, response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

  async create(request, response) {
    const { chat, username } = request.body;
    const settingsService = new SettingsService();
  try {

      const settings = await settingsService.create({chat, username});
      return response.json(settings);

    } catch (err) {

      return response.status(400).json({
        message: err.message
      });

    };
  };

  async findByUsername(request, response) {
    const { username } = request.params;
    const settingsService = new SettingsService();
    const setting = await settingsService.findByUsername(username);
    return response.json(setting);
  };

  async update(request, response) {
    const { username } = request.params;
    const { chat } = request.body;
    const settingsService = new SettingsService();
    const setting = await settingsService.update(username, chat);
    return response.json(setting);
  };
};

export { SettingsController };