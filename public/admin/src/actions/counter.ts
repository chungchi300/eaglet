import { DECREMENT, INCREMENT } from 'reducers/counter'
export function increment() {
  return { type: INCREMENT }
}
export function decrement() {
  return { type: DECREMENT }
}
