import { reduceActions } from './index'

describe('reduceActions', () => {
  const testReducer = (state = 0, action) =>
    action.type === 'test' ? state + action.payload : state
  const testActions = [
    { type: 'test', payload: 1 },
    { type: 'test', payload: 2 }
  ]

  test('produces array of states, given arracy of actions and reducer', () => {
    const states = reduceActions(testActions)(testReducer)
    expect(states).toEqual([0, 1, 3])
  })

  test('called with inverted arguments', () => {
    const states = reduceActions(testReducer)(testActions)
    expect(states).toEqual([0, 1, 3])
  })
})
