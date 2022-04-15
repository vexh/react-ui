import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';

test('Icon 是个 svg', () => {
    const component = renderer.create(
        <Icon name="wechat" />,
    );

    expect(component).toMatchSnapshot();
})