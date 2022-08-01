import express from "express";
import MensajesService from "../services/mensajes.js";

const router = express.Router();
const messagesService = new MensajesService();

router.get('/', async(req, res) => {
	let messages = await messagesService.getAllMessages();
	if (messages.length == 0) return res.send({error: "No hay mensajes cargados"});
	res.send(messages);
});

router.post('/', async(req, res) => {
	let {user, message, date} = req.body;
	let chat = {user, message, date};
	await messagesService.saveMessage(chat);
	res.send({
        status: "ok",
		message: "Mensaje agregado con exito"
	});
});

export default router;