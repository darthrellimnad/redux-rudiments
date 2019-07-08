export const ACTION_PATH = '@@redux-rudiments'

export const emptyAction = () => ({ type: `${ACTION_PATH}/empty` })

export const isArray = Array.isArray

export const identity = (val) => val

export const isNil = (val) => val == null

export const isUndefined = (val) => val === undefined

export const isStringOrNull = (str) => isNil(str) || typeof str === 'string'

export const isObject = (val) => !isNil(val) && typeof val === 'object'

export const isNonArrayObject = (val) => !isArray(val) && isObject(val)

export const isObjectOrNull = (val) => isNil(val) || isObject(val)

export const isFunction = (val) => typeof val === 'function'

export const without = (arr, ...values) => arr.filter((val) => values.indexOf(val) === -1)

export const normalizeArray = (val) => isArray(val) ? val : [val]
