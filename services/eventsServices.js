import Event from "../models/Event.js";

export const getAllEvents = () => Event.find();

export const findEventById = (eventId) => Event.findById(eventId)
