import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { _Card as Card } from './Card';

describe('<Card />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = shallow(<Card id={1} pairId={1} />);
    props = wrapper.unrendered.props;
  });

  it('#isFlipped', () => {
    expect(props.isFlipped).to.equal(false);
  });

  it('#isGuessed', () => {
    expect(props.isGuessed).to.equal(false);
  });
});
