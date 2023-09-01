import { renderHook, act } from '@testing-library/react-hooks'
import useCalculator from './useCalculator'

describe('useCalculator', () => {
  it('should initialize with default operation and alert state', () => {
    const { result } = renderHook(() => useCalculator())

    expect(result.current.operation).toBe('0')
    expect(result.current.openAlert).toBe(false)
  })

  describe('should display the numbers, operators and operation value in screen', () => {
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

      expect(result.current.operation).toBe('1+')

      act(() => {
        result.current.handleButtonClicked({ value: '2' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '=' })
      })

      expect(result.current.operation).toBe('3')
    })
  })

  describe('should calculate or display error message depends on the operation', () => {
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

    it('should calculate de operation value correctly', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '5' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '*' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '5' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '=' })
      })

      expect(result.current.operation).toBe('25')
      expect(result.current.openAlert).toBe(false)
    })
  })

  it('should clear or reset the display screen value ', () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleButtonClicked({ value: '1' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '+' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '3' })
    })
    act(() => {
      result.current.handleButtonClicked({ value: '=' })
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

  describe('should calculate the correct percentage values', () => {
    it('should return 0.01', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '1' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('0.01')
    })
    it('should return 0.1', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '10' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('0.1')
    })

    it('should return 0.15', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '15' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('0.15')
    })

    it('should return 1', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '100' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('1')
    })

    it('should return 0.001', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '0.1' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('0.001')
    })

    it('should return -0.0013', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '-0.13' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '%' })
      })

      expect(result.current.operation).toBe('-0.0013')
    })
  })

  describe('should change the sign to the operation', () => {
    it('should change to negative value', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '1' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '+/-' })
      })

      expect(result.current.operation).toBe('-1')
    })

    it('should change to positive value', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '-' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '8' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '1' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '+/-' })
      })

      expect(result.current.operation).toBe('81')
    })

    it('should change to NaN value', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '-' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '+/-' })
      })

      expect(result.current.operation).toBe('NaN')

      act(() => {
        result.current.handleButtonClicked({ value: '+' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '+/-' })
      })

      expect(result.current.operation).toBe('NaN')
    })

    it('should not change', () => {
      const { result } = renderHook(() => useCalculator())

      act(() => {
        result.current.handleButtonClicked({ value: '0' })
      })
      act(() => {
        result.current.handleButtonClicked({ value: '+/-' })
      })

      expect(result.current.operation).toBe('0')
    })
  })
})
