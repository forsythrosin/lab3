'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#testjs').click(function(e) {
		$('.jumbotron h1').text('Javascript is connected');
		$('#testjs').text('Clicked!');
		$('.jumbotron p').toggleClass('active');
	});

	$('a.thumbnail').click(projectClick);
	$('button#submitBtn').click(projectFormSubmit);
}

function projectClick(e) {
    e.preventDefault();

    /*
    var projectTitle = $(this).find('p').text();
    var jumbotronHeader = $('.jumbotron h1');
    jumbotronHeader.text(projectTitle);
 	var containingProject = $(this).closest('.project');
    var description = $(containingProject).find('.project-description');
    if (description.length == 0) {
       $(containingProject).append('<div class="project-description"><p>Description of the project.</p></div>');
    } else {
       description.slideToggle();
    }
    */
    toggleDescription($(this));
}

function projectFormSubmit(e) {
	e.preventDefault();

	var projectId = $('#project').val(),
		$project = $(projectId),
		width = $('#width').val(),
		description = $('#description').val();
	if (width) {
		$(projectId).animate({
			width: width
		}, 200);
	}
	//$project.find('.project-description').text(description);
	setDescription($project.find('a'), description).slideDown();

}

function toggleDescription($project) {
	var $descElement = $project.find('.project-description');
	if ($descElement.length == 0) {
		$descElement = setDescription($project);
	}
	$descElement.slideToggle();
}

function setDescription($project, description) {
	console.log('set the description of', $project);
	if (description === undefined) {
		description = 'Description of the ' + $project.find('p').not('.project-description p').text() + ' project.';
	}
	var $descElement = $project.find('.project-description');
	if ($descElement.length == 0) {
		$descElement = $('<div class="project-description"></div>');
		$descElement.hide();
		$project.append($descElement);
	}
	$descElement.html('<p>' + description + '</p>');
	return $descElement;
}