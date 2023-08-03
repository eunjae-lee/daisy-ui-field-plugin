import { FunctionComponent } from 'react'
import { useFieldPlugin } from '../../useFieldPlugin'

const Counter: FunctionComponent = () => {
  const {
    data,
    actions: { setContent },
  } = useFieldPlugin()

  const label =
    typeof data.content !== 'number' ? 0 : JSON.stringify(data.content)
  const handleIncrement = () => {
    setContent((typeof data.content === 'number' ? data.content : 0) + 1)
  }

  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Field Value</h2>
      <div className="py-6 text-2xl font-bold text-center">{label}</div>
      <button
        className="btn w-full"
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  )
}

export default Counter
