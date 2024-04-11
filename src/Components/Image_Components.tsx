interface Image_Components_Props {
  onClick?: () => void;
  className?: string;
  src: string | undefined;
  alt: string;
}
const Image_Components = ({
  onClick,
  className,
  src,
  alt,
}: Image_Components_Props) => {
  return (
    <>
      <img onClick={onClick} className={className} src={src} alt={alt} />
    </>
  );
};

export default Image_Components;
