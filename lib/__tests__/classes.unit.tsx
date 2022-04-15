import classes from '../helpers/classes';

describe('classes.tsx', () => {
    it('传递一个参数', () => {
        const result = classes('a');
        expect(result).toEqual('a');
    })
    
    it('两个参数', () => { 
        const result2 = classes('a b');
        expect(result2).toEqual('a b');
    })
    it('奇怪的参数,undefined,null,中文', () => { 
        const result = classes('a b', undefined, '中文', null);
        expect(result).toEqual('a b 中文');
    })

    it('空的参数', () => { 
        const result = classes();
        expect(result).toEqual('');
    })
})