"use strict";

const React = require('react')
const Radium = require('radium')
const saiyanize = require('../utils/sayanize')

@saiyanize
class Card extends React.Component {
  static propTypes = {
    imgUrl: React.PropTypes.string.isRequired,
    thumbUrl: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    footnote: React.PropTypes.string.isRequired
  };

  static contextTypes = {
    gokuTheme: React.PropTypes.object
  };

  static defaultProps = { initialCount: 0 };


  /** @namespace theme.card */
  /** @namespace theme.media */
  /** @namespace theme.size */
  render() {
    const cardTheme = this.getStyle('card')
    const mediaTheme = this.getStyle('media')
    return (
      <div style={ cardTheme.base }>
        <figure style={ [ cardTheme.image, cardTheme.size[this.props.size] ] }>
          <img src={ this.props.imgUrl } alt=""/>
        </figure>
        <div style={ cardTheme.content }>
          <div style={ cardTheme.base }>
            <div style={ cardTheme.left }>
              <figure style="image is-32x32">
                <img src={ this.props.thumbUrl } alt="Image"/>
              </figure>
            </div>
            <div style={ mediaTheme.content }>
              <p style={ [ mediaTheme.content,  is-5] }>
                { this.props.title }
              </p>
              <p style="subtitle is-6">
                { this.props.subtitle }
              </p>
            </div>
          </div>

          <div style="content">
            { this.props.content }
            <br>
              <small>
                { this.props.footnote }
              </small>
            </br>
          </div>
        </div>
      </div>
    )
  }
}



module.exports = Radium(Card)
