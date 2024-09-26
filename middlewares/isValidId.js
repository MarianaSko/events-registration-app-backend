import { isValidObjectId } from "mongoose";
import HttpError from "../helpers/HttpError.js";

export const isValidId = (req, res, next) => {
    const { eventId } = req.params;
    if (!isValidObjectId(eventId)) {
        return next(HttpError(404, `${eventId} is not valid id`))
    }
    next();
}