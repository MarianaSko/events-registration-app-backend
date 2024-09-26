import * as eventsService from "../services/eventsServices.js";
import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getAllEvents = async (req, res) => {
    const result = await eventsService.getAllEvents();
    res.json(result);
};

const addParticipant = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { name, email, birthDate, source } = req.body;

        const result = await eventsService.findEventById(eventId);

        if (!result) {
            throw HttpError(404);
        }

        result.participants.push({ name, email, birthDate, source });

        await result.save();

        return res.status(200).json({ message: 'Participant added successfully', result });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};


export default {
    getAllEvents: ctrlWrapper(getAllEvents),
    addParticipant: ctrlWrapper(addParticipant)
}