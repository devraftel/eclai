type RequiredCertificatesProps = {
    certification_name: string;
    reason: string;
  };
  
  type AllRequiredCertificatesProps = {
    certifications: RequiredCertificatesProps[];
  };

  type RequestMoreInfo = {
    request_more_info: string
  }