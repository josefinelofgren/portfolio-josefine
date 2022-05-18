import style from './underline.module.scss'

const Underline = ({ text, src }) => {
  return <a className={style.underline} href={src}>{text}</a>
}

export default Underline;