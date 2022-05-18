import style from "./card.module.scss";

// import components
import Heading from "../heading/heading";
import Button from "../button/button";
import Label from "../label/label";

const Card = ({
  image,
  alt,
  name,
  title,
  preamble,
  variant,
  labels,
  bgColor,
  button,
  ...props
}) => {
  return (
    <article {...props}>
      <img
        src={image}
        alt={alt}
        className="card-image"
        style={{ backgroundColor: `${bgColor}` }}
      />
      <div className="card-content">
        {labels.map((item, index) => {
          return <Label key={index} element="label" text={item} />;
        })}
        <div className="card-text">
          <Heading element="h3" text={title} />
          <p>{preamble}</p>
        </div>
        <Button element="button" variant="primary" text={button} />
      </div>
    </article>
  );
};

export default Card;
