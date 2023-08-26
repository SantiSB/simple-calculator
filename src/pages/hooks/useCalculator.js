import { useState } from 'react'
import { evaluate } from 'mathjs'

const useCalculator = () => {
  const [openAlert, setOpenAlert] = useState(false)
  const [operation, setOperation] = useState('')

  const handleEquals = () => {
    try {
      setOperation(evaluate(operation).toString())
    } catch (error) {
      setOpenAlert(true)
      console.log(error)
    }
  }

  const handleClear = () => {
    setOperation('')
  }

  const handleBackspace = () => {
    setOperation(operation.substring(0, operation.length - 1))
  }

  const handlePercentage = () => {
    setOperation((operation / 100).toString())
  }

  const handleNegate = () => {
    setOperation((operation * -1).toString())
  }

  const handleDefault = (buttonValue) => {
    setOperation(operation.concat(buttonValue))
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
    setOpenAlert
  }
}

export default useCalculator;
