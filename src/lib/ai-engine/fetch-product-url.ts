// Mock function to simulate fetching product details. Replace this with actual logic.
export const fetchProductDetailsFromUrl = async (
  url: string
): Promise<ProductDetails> => {
  console.log(
    "\n-------- process.env.URL_AI_LOADER_MICROSERVICE_URL:\n---------\n ",
    `${process.env.URL_AI_LOADER_MICROSERVICE_URL}`
  );
  const data = await fetch(
    `${process.env.URL_AI_LOADER_MICROSERVICE_URL}/ai_url?url=${url}`, {
      cache: "no-cache"
    }
  );
  const res: ProductDetails = await data.json();

  console.log("\n--------\nfetchProductDetailsFromUrl:\n---------\n ", res);

  return res;
};
