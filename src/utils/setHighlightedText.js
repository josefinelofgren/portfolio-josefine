import Highlight from '../components/highlight/highlight'

const setHighlightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <Highlight text={part} key={index}>
            {}
          </Highlight>
        ) : (
          part
        )
      )}
    </>
  )
}

export { setHighlightedText }