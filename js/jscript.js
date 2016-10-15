$(document).ready(function(){
	$('#cvd').click(function(){
		$.fileDownload('/Resume.pdf')
	    .done(function () { alert('File download a success!'); })
	    .fail(function () { alert('File download failed!'); });
    });
});