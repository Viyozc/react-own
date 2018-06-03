
export default function home (state, action) {
  switch (action.type) {
    case 'COMMON':
      console.log('common reducer', state, action)
  }
  return {
    common: action.payload
  }
}
