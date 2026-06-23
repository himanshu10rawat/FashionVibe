export default async function Product({ params }) {
  const { product } = await params;
  console.log("product:", product);

  return <div>{product} page</div>;
}
