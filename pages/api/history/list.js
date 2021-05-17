import mockjs from 'mockjs';
import { tokens } from '../../../assets/const';

mockjs.Random.extend({
    chain: function () {
        return this.pick(['Bitcoin', 'Wanchain', 'Ethereum']);
    },
    tokens: function () {
        return this.pick(Object.keys(tokens));
    },
    addresses: function () {
        return this.pick([
            '0xb2edde501500ddcc1ccb108e0a9fd2dfb303c860',
            '0xf912E0aEE15f568E5075a33456225dEa3a11B29b',
            '14a4zeC1uc84XEZSM4nQQkpBes8Zuu5ieQ',
        ]);
    },
});

export default (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.statusCode = 200
    res.json(mockjs.mock({
        'list|16': [
            {
                'key|+1': 0,
                asset: '@tokens',
                amount: () => mockjs.Random.natural(0, 10000),
                from: '@chain',
                to: '@chain',
                address: '@addresses',
                'time|+1': () => mockjs.Random.datetime('yyyy-MM-dd HH:mm:ss'),
            },
        ],
    }))
}