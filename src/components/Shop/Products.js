import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id :'p1',
    title :'my first book',
    price :6,
    describe :'my book i ever wrote'
  },
  {
    id :'p2',
    title :'my second book',
    price :8,
    describe :'my second book i ever wrote'
  },
  {
    id :'p3',
    title :'my thrid book',
    price :6,
    describe :'my  thrid book i ever wrote'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_DATA.map((items)=>{
        return (
          <ProductItem
          key = {`${items.id}`}
          id= {items.id}
          title={items.title}
          price={items.price}
          description = {items.describe}
        />
        )
      })}
      </ul>
    </section>
  );
};

export default Products;
