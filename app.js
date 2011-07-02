Ext.Loader.setConfig({
    enabled        : true,
    paths          : {
        'Ext.ux'  : 'assets/ux',
    }
});

Ext.create('Ext.app.Application', {
    name : 'Senchen',

    autoCreateViewport : true,

    controllers: [
        'Senchen.controller.Base'
    ]
});
