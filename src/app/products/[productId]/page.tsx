import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => ({
//   title: `Product ${params.productId}`,
// });

// We can define generateMetadata as a async function

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return <h1>Details of Product {params.productId}</h1>;
}
