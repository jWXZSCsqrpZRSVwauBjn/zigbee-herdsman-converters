const exposes = require('../lib/exposes');
const fz = {...require('../converters/fromZigbee'), legacy: require('../lib/legacy').fromZigbee};
const reporting = require('../lib/reporting');
const extend = require('../lib/extend');
const tz = require('../converters/toZigbee');
const e = exposes.presets;

module.exports = [
    {
        zigbeeModel: ['TS0505B'],
        model: 'NP-E27-ZG-RGBCCT-9W',
        vendor: 'Nortpoint',
        description: 'Zigbee RGB+CCT light',
        extend: extend.light_onoff_brightness_colortemp_color(),
        },
    },
];
