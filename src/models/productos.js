import knexLib from 'knex';

class ProductosSchema {
	constructor(config){
        this.knex = knexLib(config);
    }

	createProductsTable = () => {
		return this.knex.schema.dropTableIfExists('productos')
			.finally(() => {
				return this.knex.schema.createTable('productos', table => {
					table.increments('id').primary();
					table.string('title', 100).notNullable();
					table.float('price').notNullable();
					table.string('thumbnail', 255).notNullable();
				});
			});
	}

    saveProduct = (product) => {
        return this.knex('productos').insert(product);
    }

    getAllProducts = () => {
        return this.knex('productos').select('*');
    }

	getProductById = (id) => {
		return this.knex.from('productos').select('id', 'title', 'price', 'thumbnail').where({ 'id' : id });
    }

	updateProduct = (product) => {
		return this.knex.from('productos').where('id', product.id).update({'title': product.title, 'price': product.price, 'thumbnail': product.thumbnail})
	}

	deleteProduct = (id) => {
		return this.knex.from('productos').where('id', id).del();
	}

    close(){
        this.knex.destroy();
    }
}

export default ProductosSchema;