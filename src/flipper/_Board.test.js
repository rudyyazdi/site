import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { _Board as Board } from './Board';

describe('<Board />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = shallow(<Board />);
    props = wrapper.unrendered.props;
  });

  it('#isFlipped', () => {
    console.log(wrapper);
    console.log(props);
  });

  it('#isGuessed', () => {
    expect(1).to.equal(1);
  });
});
