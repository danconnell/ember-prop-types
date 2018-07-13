/**
 * Logging utility that includes a little information about the object doing the logging
 */
import Ember from 'ember'

export default {
  throwError (message) {
    throw new Error(message)
  },

  /**
   * Log a warning message
   * @param {*} obj - the object doing the warning
   * @param {String} message - the warning
   * @param {Boolean} throwError - whether or not to throw error
   */
  warn (obj, message, throwError) {
    const id = obj.toString()
    message = `[${id}]: ${message}`

    if (throwError) {
      this.throwError(message)
    } else {
      console.warn(message)
    }
  }
}
