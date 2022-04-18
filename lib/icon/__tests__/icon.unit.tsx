import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../icon';

describe('Icon 组件', () => {
    it('成功渲染', () => {
        const component = renderer.create(
            <Icon name="wechat" />,
        );
    
        expect(component).toMatchSnapshot();
    })

    it('on click', () => {
        // const fn = jest.fn();
        // const component = mount(<Icon name="wechat" onClick={fn}></Icon>)
        // component.find('svg').simulate('click');
        // expect(fn).toBeCalled();
    })
})
