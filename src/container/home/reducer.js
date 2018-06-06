
export default function home (state, action) {
  switch (action.type) {
    case 'HOME_CLICK':
      console.log('home reducer', state, action)
      break
    default: break
  }
  return {
    number: action.payload + 1
  }
}
