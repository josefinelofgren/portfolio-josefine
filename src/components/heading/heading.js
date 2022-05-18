import style from "./heading.module.scss"

const Heading = ({
  text,
  element,
  children,
  size,
  variant,
  align,
  ...props
}) => {
  const Element = `${element}`
  const classes =
    (variant ? ` ${style['Heading--' + variant]}` : '') +
    (align ? ` ${style['Heading--' + align]}` : '')

  return (
    <Element className={`${style.Heading} ${classes} `} {...props}>
      {text}
      {children}
    </Element>
  )
}

export default Heading