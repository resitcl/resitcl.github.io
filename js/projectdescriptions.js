var modal = $('#project-modal')

function injectProyects(){
	var portfolioItem = $('#portfolio-to-inject')
	var portfolioSection = $('#portfolio-grid')

	projects.forEach(function(project){
		portfolioSection.append(portfolioItem.clone());
		portfolioSection.children().last().css('display', 'block')
		portfolioSection.children().last().find('#portfolio-image-thumbnail').attr('src', project.thumbnail)
		portfolioSection.children().last().find('#portfolio-a').attr('data-projid', project.id)
		portfolioSection.children().last().find('#portfolio-text-title').text(project.name)
		portfolioSection.children().last().find('#portolio-text-classification').html(project.classification)
	})
}

function showProjectModal(obj) {
	var projectId = parseInt(obj.getAttribute('data-projid'))
	var project = projects.filter(function(item) { return item.id == projectId })[0]
	modal.css('display', 'block')
	$('#project-modal-title').text(project.name)
	$('#project-modal-description').text(project.description)
	$('#project-modal-image').attr('src', project.image)

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
		"id": 2,
		"name": "Impera Web",
		"description": "Software de apoyo a la gestión de la construcción escrito sobre .NET",
		"image": "img/works/imperawebppal.png",
		"classification": "Web App",
		"thumbnail": "img/works/imperawebthumb.png"
	},
	{
		"id": 1,
		"name": "Impera Dashboard",
		"description": "Aplicación para tablets hecha en Android nativo",
		"image": "img/works/imperaandroidppal.png",
		"classification": "App Móvil",
		"thumbnail": "img/works/imperaandroidthumb.png"
	}, {
		"id": 3,
		"name": "Agroamanecer Web",
		"description": "Software de gestión agrícola hecho en Ruby on Rails",
		"image": "img/works/agroppal.png",
		"classification": "Web App",
		"thumbnail": "img/works/agrothumb.png"
	}
]

injectProyects();
