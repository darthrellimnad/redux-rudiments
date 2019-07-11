import { isFSA } from 'flux-standard-action'
import {
  emptyAction,
  isArray,
  identity,
  isNil,
  isUndefined,
  isStringOrNil,
  isObject,
  isNonArrayObject,
  isObjectOrNil,
  isFunction,
  without,
  normalizeArray
} from './utils'

describe('internal utils for redux-rudiments', () => {
  describe('emptyAction', () => {
    test('produces a valid FSA', () => {
      const action = emptyAction()
      expect(isFSA(action)).toBe(true)
    })
  })

  describe('isArray', () => {
    test('return true for array', () => {
      expect(isArray([])).toBe(true)
      expect(isArray(new Array(2))).toBe(true)
    })

    test('return false for non-array', () => {
      expect(isArray({})).toBe(false)
      expect(isArray('boba')).toBe(false)
    })
  })

  describe('identity', () => {
    test('returns first argument', () => {
      const obj = {}
      expect(identity(obj)).toBe(obj)
    })
  })

  describe('isNil', () => {
    test('returns true for null or undefined', () => {
      expect(isNil(null)).toBe(true)
      expect(isNil(undefined)).toBe(true)
    })

    test('returns false for non-nil value', () => {
      expect(isNil(0)).toBe(false)
      expect(isNil('')).toBe(false)
      expect(isNil(NaN)).toBe(false)
    })
  })

  describe('isUndefined', () => {
    test('returns true for undefined', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    test('returns false for non-undefined values', () => {
      expect(isUndefined(null)).toBe(false)
      expect(isUndefined('')).toBe(false)
      expect(isUndefined(0)).toBe(false)
    })
  })

  describe('isStringOrNil', () => {
    test('returns true for string or nil', () => {
      expect(isStringOrNil('')).toBe(true)
      expect(isStringOrNil(null)).toBe(true)
      expect(isStringOrNil(undefined)).toBe(true)
    })

    test('returns false for non-string or non-nil values', () => {
      expect(isStringOrNil(0)).toBe(false)
      expect(isStringOrNil([])).toBe(false)
      expect(isStringOrNil(Infinity)).toBe(false)
      expect(isStringOrNil(NaN)).toBe(false)
    })
  })

  describe('isObject', () => {
    test('returns true for object', () => {
      expect(isObject({})).toBe(true)
      expect(isObject(new Array(2))).toBe(true)
    })

    test('returns false for non-object values', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject('')).toBe(false)
      expect(isObject(0)).toBe(false)
    })
  })

  describe('isNonArrayObject', () => {
    test('returns true for non-array objects', () => {
      expect(isNonArrayObject({})).toBe(true)
    })

    test('returns false for arrays and non-objects', () => {
      expect(isNonArrayObject([])).toBe(false)
      expect(isNonArrayObject(new Array(2))).toBe(false)
      expect(isNonArrayObject('boba')).toBe(false)
    })
  })

  describe('isObjectOrNil', () => {
    test('returns true for objects and nil values', () => {
      expect(isObjectOrNil({})).toBe(true)
      expect(isObjectOrNil(null)).toBe(true)
      expect(isObjectOrNil(undefined)).toBe(true)
      expect(isObjectOrNil([])).toBe(true)
    })

    test('returns false for non-objects and non-nil values', () => {
      expect(isObjectOrNil(0)).toBe(false)
      expect(isObjectOrNil('')).toBe(false)
      expect(isObjectOrNil(NaN)).toBe(false)
    })
  })

  describe('isFunction', () => {
    test('returns true for functions', () => {
      expect(isFunction(identity)).toBe(true)
      expect(isFunction(() => 2)).toBe(true)
      expect(isFunction(Object)).toBe(true)
    })

    test('returns false for non-functions', () => {
      expect(isFunction(null)).toBe(false)
      expect(isFunction([])).toBe(false)
      expect(isFunction({})).toBe(false)
    })
  })

  describe('without', () => {
    test('returns provided array without supplied values', () => {
      const testArray = [ 1, 2, 2, 3, 4, 5 ]
      expect(without(testArray, 2)).toEqual([ 1, 3, 4, 5 ])
      expect(without(testArray, 0)).toEqual(testArray)
    })
  })

  describe('normalizeArray', () => {
    test('returns provided value as array when not array value', () => {
      expect(normalizeArray(2)).toEqual([ 2 ])
    })

    test('returns provided argument if given an array', () => {
      const testArray = [ 'foo', 'bar' ]
      expect(normalizeArray(testArray)).toBe(testArray)
    })
  })
})
