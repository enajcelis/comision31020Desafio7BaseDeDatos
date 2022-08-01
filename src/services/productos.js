import ProductosModel from "../models/productos.js";
import { optionsMariaDB } from "../options/mariaDB.js";

const productsModel = new ProductosModel(optionsMariaDB);

class Productos {
	getAllProducts = async() => {
		return await productsModel.getAllProducts();
	}
	
	saveProduct = async(product) => {
		return await productsModel.saveProduct(product);
	}

	getProductById = async(id) => {
		let res = await productsModel.getProductById(id);
		if(res.length === 0) return null;

		return {
			'id': res[0].id,
			'title': res[0].title,
			'price': res[0].price,
			'thumbnail': res[0].thumbnail
		};
	}

	updateProduct = async(product) => {
		let res = await productsModel.updateProduct(product);
		if(res === 0) return null;
		return res;
	}

	deleteProduct = async(id) => {
		let res = await productsModel.deleteProduct(id);
		if(res === 0) return null;
		return res;
	}
}

export default Productos;