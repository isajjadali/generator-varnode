module.exports = {
    '200,400': {
        response: {
            defaults: {
                string: {
                    field: 'message',
                    defaultValue: 'success',
                },
                object: {
                    field: 'data',
                    defaultValue: {},
                    hideIfNotExist: true,
                },
                array: {
                    field: 'dataItems',
                    defaultValue: [],
                }
            },
        },
        callback: () => { }
    },
    500: {
        response: {
            defaults: {
                string: {
                    field: 'error',
                    defaultValue: 'Default Error',
                },
                object: {
                    field: 'error',
                    defaultValue: {},
                    hideIfNotExist: true,
                },
                array: {
                    field: 'errors',
                    defaultValue: [],
                }
            },
        },
        callback: () => { }
    },
};
