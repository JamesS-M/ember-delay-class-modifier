[![Build Status](https://travis-ci.com/JamesS-M/ember-delay-class-modifier.svg?branch=master)](https://travis-ci.com/JamesS-M/ember-delay-class-modifier)
[![Ember Observer Score](https://emberobserver.com/badges/ember-delay-class-modifier.svg)](https://emberobserver.com/addons/ember-delay-class-modifier)

ember-delay-class-modifier
==============================================================================


This addon provides a {{delay-class-add}} and {{delay-class-remove}} element modifier to modify element's class after a specified duration.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-delay-class-modifier
```


Usage
------------------------------------------------------------------------------

Both modifiers (`delay-class-add`, `delay-class-remove`) accept a mandatory first parameter of the class you want to add, and a second optional parameter of the delay (in milliseconds) until the class is added. If a delay is not specified, the default `1000` will be used.

#### Add-class examples:
```hbs
<div {{delay-class-add "foo" 5000}}></div>
<button {{delay-class-add "bar"}}></button>
```

#### Remove-class examples:
```hbs
<div {{delay-class-remove "foo" 5000}}></div>
<button {{delay-class-remove "bar"}}></button>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
