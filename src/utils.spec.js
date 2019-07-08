import { isFSA } from 'flux-standard-action'
import {
  emptyAction,
  isArray,
  identity,
  isNil,
  isUndefined,
  isStringOrNull,
  isObject,
  isNonArrayObject,
  isObjectOrNull,
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
})
