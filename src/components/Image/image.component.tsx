import Image from "next/image";

interface ImagePropsInterface {
  url: string;
  alt: string;
}

export default function ImageComponent({ url, alt }: ImagePropsInterface) {
  return <Image src={url} alt={alt} fill />;
}
