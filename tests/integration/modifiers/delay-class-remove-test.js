import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'
import { later } from '@ember/runloop'

module('Integration | Modifier | delay-class-remove', function (hooks) {
  setupRenderingTest(hooks)

  test('it removes the class', async function (assert) {
    const delay = 50
    await render(hbs`<div class="test-class" {{delay-class-remove 'test-class' this.delay}}></div>`)
    const element = this.element.querySelector('div')
    later(() => assert.ok(!element.classList.contains('test-class')), delay)
  })
})
