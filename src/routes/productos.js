import express from "express";
import ProductosService from "../services/productos.js";

const router = express.Router();
const productsService = new ProductosService();

router.get('/', async(req, res) => {
	let products = await productsService.getAllProducts();
	if (products.length == 0) return res.send({error: "No hay productos cargados"});
	res.send(products);
});

router.get('/:id', async(req, res) => {
	let {id} = req.params;
	let product = await productsService.getProductById(id);
	if (!product) return res.send({error: "Producto no encontrado"});
	res.send(product);
});

router.post('/', async(req, res) => {
	let {title, price, thumbnail} = req.body;
	let product = {title, price, thumbnail};
	await productsService.saveProduct(product);
	res.send({
		message: "Producto agregado con exito", 
		product: product
	});
});

router.put('/:id', async(req, res) => {
	let id = parseInt(req.params.id);
	let {title, price, thumbnail} = req.body;
	let resUpdate = await productsService.updateProduct({id, title, price, thumbnail});
	if(resUpdate == null) return res.send({error: "El producto no existe"});
	res.send({message: "Producto actualizado con exito"});
});

router.delete('/:id', async(req, res) => {
	let id = parseInt(req.params.id);
	let resDelete = await productsService.deleteProduct(id);
	if(resDelete == null) return res.send({error: "El producto no existe"});
	res.send({message: "Producto eliminado con exito"});
});

export default router;