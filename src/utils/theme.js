const Theme = require('react-theme')
const forOwn = require('lodash/object').forOwn
const sourceList = require('../theme/default/index')

class _Theme extends Theme {
  constructor(sources) {
    super(sources)

    forOwn(sourceList, (styleSrc, name) => {
      this._sources[name] = styleSrc
    })
  }
}

var _defaultTheme = new _Theme()

const defaultTheme = {
  set: nextTheme => _defaultTheme = nextTheme,
  get: () => _defaultTheme
}

const getTheme = (component) => {
  return (component && component.context && component.context.gokuTheme) || defaultTheme.get()
}

exports.GokuTheme = _Theme
exports.defaultTheme = defaultTheme
exports.getTheme = getTheme
