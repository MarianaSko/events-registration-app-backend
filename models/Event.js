import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const participantSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: String, required: true },
    source: { type: String, required: true }
});

const eventSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Set title for movie'],
    },
    description: {
        type: String,
        default: 'No description'
    },
    eventDate: {
        type: Date,
        default: Date.now
    },
    organizer: {
        type: String,
        default: 'Organizer is not specified',
    },
    participants: [participantSchema]
}, { versionKey: false })

eventSchema.post("save", handleSaveError);

eventSchema.pre("findOneAndUpdate", setUpdateSettings);

eventSchema.post("findOneAndUpdate", handleSaveError);

const Event = model("event", eventSchema);

export default Event;