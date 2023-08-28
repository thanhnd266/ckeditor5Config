createDialog().then( config => {
	return DecoupledEditor
		.create( document.querySelector( '.editor' ), {
			licenseKey: config.licenseKey,
			cloudServices: {
				tokenUrl: "https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",
				uploadUrl: "https://33333.cke-cs.com/easyimage/upload/"
			},
		} )
		.then( editor => {
			window.editor = editor;

			// Set a custom container for the toolbar.
			document.querySelector( '.document-editor__toolbar' ).appendChild( editor.ui.view.toolbar.element );
			document.querySelector( '.ck-toolbar' ).classList.add( 'ck-reset_all' );
		} )
		.catch( handleSampleError );
} );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "tnw0oo7ao2ln-y237hdha6w3z" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
