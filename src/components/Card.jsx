import React, { Component } from 'react'
import Radium from 'radium'

class Card extends Component {
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
    const theme = this.getStyle('card')
    return (
      <div style={ theme.card }>
        <figure style={ [ theme.card.image, theme.size[this.props.size] ] }>
          <img src={ this.props.imgUrl } alt=""/>
        </figure>
        <div style={ theme.card.content }>
          <div style={ theme.media.base }>
            <div style={ theme.media.left }>
              <figure style="image is-32x32">
                <img src={ this.props.thumbUrl } alt="Image"/>
              </figure>
            </div>
            <div style={ theme.media.content }>
              <p style={ [ theme.media.content,  is-5] }>
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
              <small>{ this.props.footnote }</small>
            </br>
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Card)
