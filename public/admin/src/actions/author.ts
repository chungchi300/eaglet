import { SET_NAME } from 'reducers/author'
export function setName(name = 'jeff chung') {
  return { type: SET_NAME, payload: name }
}
