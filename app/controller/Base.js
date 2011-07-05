Ext.define('Senchen.controller.Base', {
    extend : 'Ext.app.Controller',

    models : [
        'Senchen.model.Account'
    ],

    stores : [
        'Senchen.store.Accounts'
    ],

    init: function() {
        var me = this;

        me.control({
            'region-leftdock' : {
                afterrender : me.handleLeftDockAfterRender
            },
            'region-leftdock dataview' : {
                itemclick : me.handleLeftDockDataViewItemClick
            },
            'region-bottomdock menuitem' : {
                click : me.handleBottomDockMenuClick
            },
            'form-addaccount' : {
                hide : me.handleAddAccountHide
            },
            'form-addaccount button' : {
                click : me.handleAddAccountBtnClick
            },
            'viewport' : {
                afterrender : me.bindStores
            }
        });
    },

    handleLeftDockAfterRender: function(cnt) {
        var dv = cnt.query('dataview')[0];

        dv.select(0, false, true);
    },

    handleLeftDockDataViewItemClick: function(dv, rec, node) {
    },

    handleBottomDockMenuClick: function(item, e, opts) {
        var type = item.type,
            form = Ext.createWidget('form-addaccount', {
                type : type
            });

        form.show();
    },

    handleAddAccountHide: function(form) {
        form.destroy();
    },

    handleAddAccountBtnClick: function(btn) {
        var me   = this,
            form = btn.up('form');

        if (btn.text === 'Cancel') {
            form.hide();
        } else {
            var basic = form.getForm();

            if (basic.isValid()) {
                var values = basic.getValues(),
                    store  = me.getSenchenStoreAccountsStore();

                store.add(values);

                form.hide();
            }
        }
    },

    bindStores: function(viewport) {
        var me                = this,
            accountStore      = me.getSenchenStoreAccountsStore(),
            leftDockAccountDV = Ext.ComponentQuery.query('region-leftdock dataview')[1],
            accountOverviewDV = Ext.ComponentQuery.query('region-accountoverview dataview')[0];

        leftDockAccountDV.bindStore(accountStore);
        accountOverviewDV.bindStore(accountStore);
    }
});
