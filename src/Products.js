import React from "react"
import productsData from "./productsData"
import { Link } from "react-router-dom"

function Products() {
    const products = productsData.map(product => (
        <h3 key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <br />
            {product.description}
            <br />
            ${product.price}
        </h3>
    ))
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products