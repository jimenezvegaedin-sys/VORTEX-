import ProductCard from "./ProductCard";

export default function ProductGrid({ products=[], onQuote }) {
  return (
    <div className="grid" style={{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))"}}>
      {products.map((p) => <ProductCard key={p.id} product={p} onQuote={onQuote} />)}
    </div>
  );
}
