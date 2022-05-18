import style from './button.module.scss'

const Button = ({ text, element, variant, ...props }) => {
  let Element = element
  const classes = variant ? ` ${style['button--' + variant]}` : ''

  return (
    <Element className={`${style.Button} ${classes}`} {...props}>
      {text}
    </Element>
  )
}

export default Button