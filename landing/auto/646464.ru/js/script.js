$(document).ready(function() {

	// Menu

	var menu = $('#nav'), menuButton = $('#js-menu-button');

	menuButton.click(function (event) {
		event.preventDefault();
		menu.toggleClass('is-opened');
	});


	$(document).click(function(event) {
		$target = $(event.target);

		if ( $target.closest(menuButton).length || $target.closest(menu).length) return;

		menu.removeClass('is-opened');
		event.stopPropagation();
	});


});


$(document).ready(function() {

	// Menu

	var menu = $('#nav2'), menuButton = $('#js-menu-button2');

	menuButton.click(function (event) {
		event.preventDefault();
		menu.toggleClass('is-opened');
	});


	$(document).click(function(event) {
		$target = $(event.target);

		if ( $target.closest(menuButton).length || $target.closest(menu).length) return;

		menu.removeClass('is-opened');
		event.stopPropagation();
	});


});
