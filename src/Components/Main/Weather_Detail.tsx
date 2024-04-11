import Image_Components from "../Image_Components";
interface Weather_Detial_Props {
  parameter_span: String;
  weather_data: number | string;
  image_className?: string;
  image_src: string;
}
const Weather_Detail = ({
  parameter_span,
  weather_data,
  image_className,
  image_src,
}: Weather_Detial_Props) => {
  return (
    <div className="details">
      <span>{parameter_span}</span>
      <div className="result">
        <span>{weather_data}</span>

        <Image_Components
          className={image_className}
          src={image_src}
          alt="Icon"
        />
      </div>
    </div>
  );
};

export default Weather_Detail;
