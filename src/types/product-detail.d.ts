type ProductDetails = {
    id: string;
    product_title: string;
    company_name: string;
    price: string;
    currency: string;
    image_url: string[];
    product_url: string;
    manufacturing_materials: string[]
  };
  

  type VerifyProductCertificationProps = {
    product_title: string
    company_name: string
    certifications: string[]
    manufacturing_materials: string[] | undefined
}
