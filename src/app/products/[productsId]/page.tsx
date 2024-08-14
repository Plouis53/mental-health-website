export default function ProductDetails({
  params,
}: {
  params: { productsId: string };
}) {
  return (
    <div>
      <h1>Details about Product </h1>
      <p>These are the details about my products {params.productsId}</p>
    </div>
  );
}
