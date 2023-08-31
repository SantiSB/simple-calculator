import { renderHook, act } from '@testing-library/react-hooks'
import useCalculator from './useCalculator'

describe('useCalculator', () => {
  it('should initialize with default operation and alert state', () => {
    const { result } = renderHook(() => useCalculator())

    expect(result.current.operation).toBe('0')
    expect(result.current.openAlert).toBe(false)
  })

  it('should handle number button clicks correctly', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })

    expect(result.current.operation).toBe('1')

    act(() => {
      result.current.handleButtonClicked({ value: '2' })
    })

    expect(result.current.operation).toBe('12')
  })

  it('should handle operator button clicks correctly', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '+' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '2' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '=' })
    })

    expect(result.current.operation).toBe('3')
  })

  it('should handle message error clicks correctly', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '+' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '=' })
    })

    expect(result.current.operation).toBe('1+')
    expect(result.current.openAlert).toBe(true)
  })

  it('should clear or reset the display screen value ', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: 'C' })
    })

    expect(result.current.operation).toBe('0')
  })

  it('should clear the last digit in the display screen', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '5' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '+' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: 'CE' })
    })

    expect(result.current.operation).toBe('15')
  })

  it('should calculate the correct percentage', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '%' })
    })

    expect(result.current.operation).toBe('0.01')
  })

  it('should change the sign to the operation', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '+/-' })
    })

    expect(result.current.operation).toBe('-1')
  })
})
