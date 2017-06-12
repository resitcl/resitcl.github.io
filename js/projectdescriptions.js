var modal = $('#project-modal')

function injectProyects(){
	var portfolioItem = $('#portfolio-to-inject')
	var portfolioSection = $('#portfolio-grid')

	projects.forEach(function(project){
		portfolioSection.append(portfolioItem.clone());
		portfolioSection.children().last().css('display', 'inline-block')
		portfolioSection.children().last().addClass(project.classification)
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
	$('#project-modal-description').html(project.description)
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
		"classification": "dashboard",
		"thumbnail": "img/works/imperawebthumb.png"
	},
	{
		"id": 5,
		"name": "Web Res Publica",
		"description": "Página web corporativa para el Instituto Res Publica, hecha en Wordpress.",
		"image": "img/works/respublica.png",
		"classification": "website",
		"thumbnail": "img/works/respublica.png"
	},
	{
		"id": 6,
		"name": "ALCSA Web",
		"description": "ALCSA es un sistema de Control y Gestión Cobranza Judicial y Extra Judicial Masiva, con administración de tramites judiciales," +
						"gestión de carteras y contact center, generador automático de documentos judiciales y reporteria en base a las métricas mas relevantes del" +
						"negocio de la cobranza. resIT le otorgó soporte y desarrolló nuevas funcionalidades al sistema",
		"image": "img/works/alcsa.png",
		"classification": "dashboard",
		"thumbnail": "img/works/alcsa.png"
	},
	{
		"id": 3,
		"name": "Agroamanecer Web",
		"description": "Software de gestión agrícola hecho en Ruby on Rails",
		"image": "img/works/agroppal.png",
		"classification": "dashboard",
		"thumbnail": "img/works/agrothumb.png"
	},
	{
		"id": 4,
		"name": "Senderos Kawelluco",
		"description": "Aplicación móvil nativa, para Android e iOS, que busca guiar a los visitantes de este parque. Más información en <a href=\"http://miruta.resit.cl\">miruta.resit.cl</a>",
		"image": "img/works/kw1.png",
		"classification": "mobile-app",
		"thumbnail": "img/works/kw1.png"
	},
	{
		"id": 1,
		"name": "Impera Dashboard",
		"description": "Aplicación para tablets hecha en Android nativo",
		"image": "img/works/imperaandroidppal.png",
		"classification": "mobile-app",
		"thumbnail": "img/works/imperaandroidthumb.png"
	},
	{
		"id": 7,
		"name": "Plataforma de Encuestas - MMA",
		"description": "Aplicación web, solicitada por el Ministerio del Medio Ambiente, para crear encuestas/formularios personalizados. Este proyecto utiliza Angular 2 en la parte visual de la aplicación <i>(frontend)</i> y Django REST para la parte lógica (<i>backend</i>).",
		"image": "img/works/mmapds-min.png",
		"classification": "dashboard",
		"thumbnail": "img/works/mmapds-min.png"
	},
	{
		"id": 8,
		"name": "Benchmark App - Gepuc",
		"description": "Aplicación web orientada a facilitar el levantamiento de información sobre el estado y prácticas de diversas industrias. Utiliza React para generar la parte visual.",
		"image": "img/works/gepuc-min.png",
		"classification": "dashboard",
		"thumbnail": "img/works/gepuc-min.png"
	}
]

injectProyects();
