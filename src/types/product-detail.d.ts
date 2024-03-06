type ProductDetails = {
    id: string;
    product_title: string;
    company_name: string;
    price: number;
    currency: string;
    imageUrl: string;
    product_url: string;    
  };
  

  type VerifyProductCertificationProps = {
    product_title: string
    company_name: string
    certifications: string[]
    manufacturing_materials: string[] | undefined
}
