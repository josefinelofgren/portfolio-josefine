import style from "../../stylesheets/index.scss";

const Image = ({
  src,
  width,
  height,
  alt,
  click,
  pattern,
  bgColor,
  ...props
}) => {
  const classes =
    (click ? ` ${style['image--interactive']}` : '') +
    (pattern ? ` ${style['image--pattern']}` : '')

  return (
    <div className={`${style.Image} ${classes}`} {...props}>
      {pattern && (
        <img src={pattern} alt={alt} className={style.Image__pattern} />
      )}
      <picture>
        <source
          media="(min-width: 640px)"
          width={width}
          height={height}
          srcSet={src}
        />
        <img
          className={style.Image__object}
          src={src}
          alt={alt}
          onClick={click}
          loading="lazy"
          decoding="async"
          style={{ backgroundColor: `${bgColor}` }}
        />
      </picture>
    </div>
  )
}

export default Image