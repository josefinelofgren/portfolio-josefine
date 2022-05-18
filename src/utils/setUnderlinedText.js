import Underline from '../components/underline/underline'

const setUnderlinedText = (text, underline, src) => {
  const parts = text.split(new RegExp(`(${underline})`, 'gi'))
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === underline.toLowerCase() ? (
          <Underline text={part} key={index} src={src}>
            {}
          </Underline>
        ) : (
          part
        )
      )}
    </>
  )
}

export { setUnderlinedText }