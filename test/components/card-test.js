import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Card from '../../src/components/Card.js' // eslint-disable-line no-unused-vars
import { it, describe } from 'mocha'

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<Card />).contains(<p class="title is-5">John Smith</p>)).to.equal(true)
  })
})
