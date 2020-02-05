function selectTemplate() {
	var x = document.getElementById("template").value;
	if(x == 'documents') {
		$('#documentsContent').css('display', 'block');
		$('#signaturesContent').css('display', 'none');
		$('#signOptions').css('display', 'none');

	}
	if(x == 'signatures') {
		$('#signaturesContent').css('display', 'block');
		$('#documentsContent').css('display', 'none');
		$('#signOptions').css('display', 'block');

		
	}
}