export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length == 2) {
    return (
      <h1>
        Viewing Docs for feature {params.slug[0]} and concepts {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length == 1) {
    return <h1>Viewing Docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs Home Page</h1>;
}

// export default function Docs({
//   params,
// }: {
//   params: {
//     slug: string[];
//   };
// }) {
//   if (params.slug.length == 2) {
//     return;
//     <h1>
//       Viewing Docs for feature {params.slug[0]} and concepts {params.slug[1]}
//     </h1>;
//   } else if (params.slug.length == 1) {
//     return <h1>Viewing Docs for feature{params.slug[0]}</h1>;
//   }
//   return <h1>Docs Home Page</h1>;
// }
