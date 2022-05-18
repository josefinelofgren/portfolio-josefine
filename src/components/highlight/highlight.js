import style from './highlight.module.scss'

const Highlight = ({ text }) => {
  return <mark className={style.highlight}>{text}</mark>
}

export default Highlight