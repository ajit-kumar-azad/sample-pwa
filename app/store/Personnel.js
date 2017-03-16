Ext.define('PWA.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone'
    ],
    autoLoad: true,

    proxy: {
        type: 'ajax',

	// @sw-cache
	url: 'data/personnel.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
