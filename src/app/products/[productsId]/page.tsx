import { Metadata } from "next";

type Props = {
  params: {
    productsId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productsId}`); // Use backticks here for template literals
    }, 100);
  });
  return {
    title: `Products ${title}`, // Use backticks for template literals
  };
};

export default function ProductDetails({ params }: Props) {
  return <h1>Details about Product {params.productsId}</h1>;
}
