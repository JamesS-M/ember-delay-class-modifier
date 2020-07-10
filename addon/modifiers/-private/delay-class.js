import { later } from '@ember/runloop'
import { assert } from '@ember/debug'

export default function (element, [className, delay], method) {
  assert(`The class name must be a valid string. You provided "${className}".`, className)
  assert(`The class name must be a string. You provided ${className}, which is of type "${typeof className}"`, typeof className === 'string')
  later(() => element.classList[method](className), delay)
}
