import { StateType, TOGGLE_COLLAPSED, reducer } from "./reducer"


test('reducer will be change value', () => {
    const state: StateType = { collapsed: true }
    const newState = reducer(state, { type: TOGGLE_COLLAPSED })

    expect(newState.collapsed).toBe(false)
})

