import { useCallback } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

const [counter, setCounter] = useState( 10 )

const increment = useCallback(
  (value) => {
    setCounter( (c) => c + value)
  },
  [],
)

/* const increment = useCallback(
  () => {
    setCounter(counter + 1)
  },
  [],
) */

/* const increment = () => {
  setCounter(counter + 1)
} */

  return (
    <>
    <h1>useCallback Hook: { counter }</h1>
    <hr />
    
    <ShowIncrement increment={increment} />
    </>
  )
}
