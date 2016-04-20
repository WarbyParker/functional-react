import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'

import Typography from '../src/components/Typography'

describe('<Typography />', function () {

  it('should render a primary heading element', function () {
    const wrapper = render(<Typography />)
    expect(wrapper.text()).to.contain('Primary Heading')
  })

})
