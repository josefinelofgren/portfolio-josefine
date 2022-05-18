import style from './label.module.scss'

const Label = ({ text, element, index, variant, ...props }) => {
  let Element = element;
  const classes = variant ? ` ${style['label--' + variant]}` : ''

  return (
    <Element key={index} className={`${style.Button} ${classes}`} {...props}>
      {text}
    </Element>
  )
}

export default Label