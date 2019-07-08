import { emptyAction, isFunction } from './utils'

/**
 * Given an array of action objects, returns a function that accepts a
 * reducer function and returns all intermediary states, including initial
 * and final.  Useful for unit tests.
 *
 * Can also be called with inverted arguments. If you pass a `function` as
 * first argument, the result function will expect an array of actions.
 *
 * NOTE: This implementation will always include the "initial" state of
 * the reducer as the first element in result array.  If you would like
 * to omit this, you can use the `Array.prototype.slice` method like so:
 * ```
 * const states = reduceActions(actions)(reducer)
 * const withoutInitialState = states.slice(1)
 * const withoutFirstNStates = states.slice(N)
 * ```
 *
 * ```
 * type Reducer = (state: any, action: FSA) => any
 * ```
 * @alias module:core
 * @param {Object[]|Reducer} arg1 array of actions to process or reducer function
 * @return {function} (Reducer|Object[]) => any[]) produces resulting states as array
 */

const reduceActions = (arg1) => (arg2) => {
  const actions = isFunction(arg1) ? arg2 : arg1
  const reducer = actions === arg1 ? arg2 : arg1
  return actions.reduce((acc, cur, i) => ([
    ...acc,
    reducer(acc[i], cur)
  ]), [reducer(undefined, emptyAction())])
}

export default reduceActions
