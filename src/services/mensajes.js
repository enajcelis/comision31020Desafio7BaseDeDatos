import MessagesModel from "../models/mensajes.js";
import { optionsSQLite3 } from "../options/SQLite3.js";

const messagesModel = new MessagesModel(optionsSQLite3);

class Mensajes{
    getAllMessages = async() => {
		return await messagesModel.getAllMessages();
	}
	
	saveMessage = async(message) => {
		return await messagesModel.saveMessage(message);
	}

    close(){
        this.knex.destroy();
    }
}

export default Mensajes;