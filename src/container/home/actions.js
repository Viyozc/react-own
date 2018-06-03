export default {
  homeClick (number) {
    console.log('home click action')
    return {
      type: 'HOME_CLICK',
      payload: number
    }
  }
}
