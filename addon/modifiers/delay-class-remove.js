import { modifier } from 'ember-modifier'
import delayClass from './-private/delay-class'

export default modifier(function delayClassAdd(element, params) {
  delayClass(element, params, 'remove')
})