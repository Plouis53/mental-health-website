import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productsId: string; reviewsId: string };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>
        Review {params.reviewsId} for product {params.productsId}
      </h1>
    </div>
  );
}

// import { notFound } from "next/navigation";

// export default function ReviewDetail({
//   params,
// }: {
//   params: { productsId: string; reviewId: string };
// }) {
//   if (parseInt(params.reviewId > 1000)) {
//     notFound();
//   }
//   return (
//     <div>
//       <h1>
//         Reviews {params.reviewId} for product {params.productsId}
//       </h1>
//     </div>
//   );
// }
