const React = require('react')
const getTheme = require('../utils/theme').getTheme
const forOwn = require('lodash/object').forOwn
const pick = require('lodash/object').pick

const saiyanize = (Component) => {
  Component.contextTypes = {
    matterkitTheme: React.PropTypes.object
  }

  Component.prototype.getBasics = function () {
    return pick(
      this.props,
      'id',
      'className',
      'onClick',
      'onMouseEnter',
      'onMouseLeave',
      'onMouseOver',
      'onMouseOut',
      'onMouseDown',
      'onMouseUp'
    )
  }

  Component.prototype.getStyle = function (name, mod, style) {
    var styles = getTheme(this)
    var ret = styles.getStyle(name, mod, style)

    forOwn(ret, (value, key) => {
      var pre = key[0]
      if (pre !== ':' && pre !== '@' && typeof value === 'object') {
        delete ret[key]
      }
    })

    return ret
  }
}

module.exports = saiyanize
