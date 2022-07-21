import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'My first product',
    price: 6,
    description: 'The first product I have made'
  },
  {
    id: 'p2',
    title: 'My second product',
    price: 8,
    description: 'The second product I have made'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
