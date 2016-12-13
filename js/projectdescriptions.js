var showingModal = false;
var modal = $('#project-modal')

function showProjectModal(obj) {
	var projectId = parseInt(obj.getAttribute('data-projid'))
	var project = projects.filter(function(item) { return item.id == projectId })[0]
	modal.css('display', 'block')
	$('#project-modal-title').text(project.name)
	$('#project-modal-description').text(project.description)
	showingModal = true;
	$(window).keydown(function(e) {
		if(e.which == 27){
			modal.hide()
			$(window).keydown(null)
		}
	});
}

function hideModal(){
	if(modal != null){
		modal.hide()
	}
}

var projects = [
	{
		"id": 1,
		"name": "Impera Dashboard",
		"description": "Aplicación para tablets hecha en Android nativo"
	},{
		"id": 2,
		"name": "Impera Web",
		"description": "Software de apoyo a la gestión de la construcción escrito sobre .NET"
	}, {
		"id": 3,
		"name": "Agroamanecer Web",
		"description": "Software de gestión agrícola hecho en Ruby on Rails"
	}
]
