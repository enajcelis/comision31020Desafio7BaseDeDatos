import knexLib from 'knex';

class MensajesSchema {
	constructor(config){
        this.knex = knexLib(config);
    }

	createMessagesTable = () => {
		return this.knex.schema.dropTableIfExists('mensajes')
			.finally(() => {
				return this.knex.schema.createTable('mensajes', table => {
					table.increments('id').primary();
					table.string('user', 100).notNullable();
					table.text('message').notNullable();
					table.dateTime('date').notNullable();
				})
			});
	}

    saveMessage = (message) => {
        return this.knex('mensajes').insert(message);
    }

    getAllMessages = () => {
        return this.knex('mensajes').select('*');
    }

    close(){
        this.knex.destroy();
    }
}

export default MensajesSchema;