export default {
  homeClick () {
    console.log('common action')
    return {
      type: 'COMMON_ACTIONS',
      payload: 'action'
    }
  }
}
