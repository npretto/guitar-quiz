var slideSpeed = 300;
var noteToShow = "LAll";
var canREOlick = true;
var nota ="";
var possibili_note = ['SI','DO','RE','MI','FA','SOL','LA','SI']
function notaRandom() {
	var n;
	do
	{
		n = possibili_note[Math.floor(Math.random()*possibili_note.length)];
	}while(nota == n);
	return n;
}


var notes = {
	e: ['MI','FA','FA#','SOL','SOL#','LA','LA#','SI','DO','DO#','RE','RE#','MI'],
	a: ['LA','LA#','SI','DO','DO#','RE','RE#','MI','FA','FA#','SOL','SOL#',"LA"],
	d: ['RE','RE#','MI','FA','FA#','SOL','SOL#','LA','LA#','SI','RE','DO#','RE'],
	g: ['SOL','SOL#','LA','LA#','SI','DO','DO#','RE','RE#','MI','FA','FA#','SOL'],
	b: ['SI','DO','DO#','RE','RE#','MI','FA','FA#','SOL','SOL#','LA','LA#','SI']
}

for (var i=0; i < 8; i++){
	$('.mask.low-e ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.e[i]+'><span class="note_text">'+notes.e[i]+'</span></li>')
	$('.mask.a ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.a[i]+'><span class="note_text">'+notes.a[i]+'</span></li>')
	$('.mask.d ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.d[i]+'><span class="note_text">'+notes.d[i]+'</span></li>')
	$('.mask.g ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.g[i]+'><span class="note_text">'+notes.g[i]+'</span></li>')
	$('.mask.b ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.b[i]+'><span class="note_text">'+notes.b[i]+'</span></li>')
	$('.mask.high-e ul').append('<li onclick="seleziona(this)" class="note hidden" note='+notes.e[i]+'><span class="note_text">'+notes.e[i]+'</span></li>')
}


function seleziona(elem)
{
	elem = $(elem);
	console.log(elem);
	elem.removeClass('hidden');
	if(elem.attr('note') == nota)
	{
		elem.addClass('correct');
		success();
	}else
	{
		elem.addClass('wrong');

	}
}

function success()
{
  setTimeout(function(){
    $('#popup_father').fadeIn();
  },500)
	
	
}

function next()
{
	findNote(notaRandom())
	reset();
	$('#popup_father').hide();
}

function findNote(n)
{
	nota = n;
	$('#messaggio').text("trova la nota: " + nota);

}

function reset()
{
	$('.note').addClass('hidden')
	$('.note').removeClass('correct')
	$('.note').removeClass('wrong')
}


next();

