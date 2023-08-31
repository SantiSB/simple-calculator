import { useState } from 'react'
import { evaluate } from 'mathjs'

const useCalculator = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [operation, setOperation] = useState('0')

  const handleEquals = () => {
    try {
      const result = evaluate(operation)
      const formattedResult = Number.isInteger(result)
        ? result.toString()
        : result.toFixed(2)
      setOperation(formattedResult)
    } catch (error) {
      setOpenAlert(true)
    }
  }

  const handleClear = () => {
    setOperation('0')
  }

  const handleBackspace = () => {
    setOperation(operation.length > 1 ? operation.slice(0, -1) : '0')
  }

  const handlePercentage = () => {
    setOperation((operation / 100).toString())
  }

  const handleNegate = () => {
    setOperation((operation * -1).toString())
  }

  const handleDefault = (buttonValue) => {
    operation === '0'
      ? setOperation(buttonValue.toString())
      : setOperation(operation.concat(buttonValue))
  }

  const handleButtonClicked = (buttonData) => {
    const buttonActions = {
      '=': handleEquals,
      C: handleClear,
      CE: handleBackspace,
      '%': handlePercentage,
      '+/-': handleNegate,
      default: () => handleDefault(buttonData.value),
    }

    const selectedAction =
      buttonActions[buttonData.value] || buttonActions.default
    selectedAction()
  }

  return {
    operation,
    handleButtonClicked,
    openAlert,
    setOpenAlert,
  }
}

export default useCalculator
