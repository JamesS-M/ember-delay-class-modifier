import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { render } from '@ember/test-helpers'
import hbs from 'htmlbars-inline-precompile'
import { later } from '@ember/runloop'

module('Integration | Modifier | delay-class-add', function (hooks) {
  setupRenderingTest(hooks)

  test('it adds the class', async function (assert) {
    const delay = 50
    await render(hbs`<div {{delay-class-add 'test-class' this.delay}}></div>`)
    const element = this.element.querySelector('div')
    later(() => assert.ok(element.classList.contains('test-class')), delay)
  })
})
