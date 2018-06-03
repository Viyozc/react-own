export default {
  homeClick () {
    console.log('home click action')
    return {
      type: 'HOME_CLICK',
      payload: 'action'
    }
  }
}
