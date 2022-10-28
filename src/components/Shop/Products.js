import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Product name 1',
        price: 10,
        description: 'this the first product'
    },
    {
        id: 'p2',
        title: 'Product name 2',
        price: 20,
        description: 'this the second product'

    },
    {
        id: 'p3',
        title: 'Product name 3',
        price: 30,
        description: 'this the third product'

    },
    {
        id: 'p4',
        title: 'Product name 4',
        price: 40,
        description: 'this the forth product'

    },

]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map(product => {
              return (
                  <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
              />
              )})}
      </ul>
    </section>
  );
};

export default Products;
