Package.describe({
	summary: "Signature Pad packaged for Meteor"
});

Package.on_use(function (api){
	api.add_files('assets/flashcanvas.js', 'client');
	api.add_files('assets/jquery.signaturepad.css', 'client');
	api.add_files('jquery.signaturepad.js', 'client');
});
