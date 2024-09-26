import express from "express";
import eventsController from "../controllers/eventsController.js";
import validateBody from "../decorators/validateBody.js";
import { addParticipantSchema } from "../schemas/eventsSchema.js";
import { isValidId } from "../middlewares/isValidId.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsController.getAllEvents);

eventsRouter.post('/:eventId/participants', isValidId, validateBody(addParticipantSchema), eventsController.addParticipant);

export default eventsRouter;