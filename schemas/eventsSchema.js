import Joi from "joi";

export const addParticipantSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    birthDate: Joi.string().required(),
    source: Joi.string().required()
})
