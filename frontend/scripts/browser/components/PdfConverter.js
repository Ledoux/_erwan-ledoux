import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'

const elementHandlers = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
}

class PdfConverter extends Component {
  constructor () {
    super()
    this.handleConvertClick = this._handleConvertClick.bind(this)
  }
  _handleConvertClick () {
    const url = `/pdf?rawHTML=${encodeURIComponent(this._containerElement.innerHTML)}`
    fetch(url)
  }
  render () {
    return (
      <div className='pdf-converter'>
        <button
          className='pdf-converter__button'
          onClick={this.handleConvertClick}
        >
          convert
        </button>
        <div className='pdf-converter__container'
          ref={_e => { this._containerElement = _e }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PdfConverter
