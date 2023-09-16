import { CertificateImageSchema } from "../Schema";

const CertificateImage = ({ path }: CertificateImageSchema) => {
  return <img src={path} alt="certificate" />;
};

export default CertificateImage;
