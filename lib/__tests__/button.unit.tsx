import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button/button';

test('button 是个 div', () => {
    const component = renderer.create(
        <Button />,
    );

    expect(component).toMatchSnapshot();
})