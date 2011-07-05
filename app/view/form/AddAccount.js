Ext.define('Senchen.view.form.AddAccount', {
    extend : 'Ext.form.Panel',
    alias  : 'widget.form-addaccount',

    defaults    : {
        allowBlank : false,
        anchor     : '100%',
        labelAlign : 'top',
        msgTarget  : 'side'
    },
    defaultType : 'textfield',
    floating    : true,
    frame       : true,
    modal       : true,
    padding     : 10,

    initComponent: function() {
        var me   = this,
            type = me.type;

        Ext.apply(me, {
            dockedItems : me.buildDocks(),
            items       : me.buildItems(),
            title       : 'Add ' + me.capitalizeType(type)
        });

        me.callParent();
    },

    buildDocks: function() {
        var me   = this,
            type = me.type;

        return [
            {
                xtype : 'toolbar',
                dock  : 'bottom',
                ui    : 'footer',
                items : [
                    '->',
                    {
                        text : 'Cancel'
                    },
                    {
                        text : 'Add ' + me.capitalizeType(type)
                    }
                ]
            }
        ];
    },

    buildItems: function() {
        return [
            { fieldLabel : 'Institution Name', name : 'institutionName' },
            { fieldLabel : 'Account Nickname', name : 'accountName'     }
        ];
    },

    capitalizeType: function() {
        var me   = this,
            type = me.type,
            arr  = type.split(' '),
            i    = 0,
            len  = arr.length,
            string;

        for (; i < len; i++) {
            string = arr[i];

            arr[i] = Ext.String.capitalize(string);
        }

        return arr.join(' ');
    }
});
