export default function ReviewDetail({
  params,
}: {
  params: { productsId: string; reviewId: string };
}) {
  return (
    <div>
      <h1>
        Reviews {params.reviewId} for product {params.productsId}
      </h1>
    </div>
  );
}
