// TODO - replace <template> by the module name and delete this comment
/**
 * jQuery Module Template
 *
 * This template is used for jQuery modules.
 *
 */

(function($) {
	/**
	 * \brief .\n
	 * Auto-load the <template> modules for the tags with a data-<template> field.\n
	 * 
	 * \alias jQuery.<template>
	 *
	 * \param {String|Array} [action] The action to be passed to the function. If the instance is not created,
	 * \a action can be an \see Array that will be considered as the \a options.
	 * Otherwise \a action must be a \see String with the following value:
	 * \li \b create - Creates the object and associate it to a selector. \code $("#test").<template>("create"); \endcode
	 *
	 * \param {Array} [options] The options to be passed to the object during its creation.
	 * See \see $.fn.<template>.defaults a the complete list.
	 *
	 * \return {jQuery}
	 */
	$.fn.<template> = function(arg, data) {
		var retval;
		// Go through each objects
		$(this).each(function() {
			retval = $().<template>.x.call(this, arg, data);
		});
		// Make it chainable, or return the value if any
		return (typeof retval === "undefined") ? $(this) : retval;
	};

	/**
	 * This function handles a single object.
	 * \private
	 */
	$.fn.<template>.x = function(arg, data) {
		// Load the default options
		var options = $.fn.<template>.defaults;

		// --- Deal with the actions / options ---
		// Set the default action
		var action = "create";
		// Deal with the action argument if it has been set
		if (typeof arg === "string") {
			action = arg;
		}
		// If the module is already created and the action is not create, load its options
		if (action != "create" && $(this).data("<template>")) {
			options = $(this).data("<template>");
		}
		// If the first argument is an object, this means options have
		// been passed to the function. Merge them recursively with the
		// default options.
		if (typeof arg === "object") {
			options = $.extend(true, {}, options, arg);
		}
		// Store the options to the module
		$(this).data("<template>", options);

		// Handle the different actions
		switch (action) {
		// Create action
		case "create":
			break;
		};
	};

	/**
	 * \brief Default options, can be overwritten. These options are used to customize the object.
	 * Change default values:
	 * \code $().<template>.defaults.theme = "aqua"; \endcode
	 * \type Array
	 */
	$.fn.<template>.defaults = {
		/**
		 * Specifies a custom theme for this element.
		 * By default the <template> class is assigned to this element, this theme
		 * is an additional class to be added to the element.
		 * \type String
		 */
		theme: ""
	};

	/**
	 * \brief Associate the <template> module to all elements containing the
	 * data-<template> tag (unless another one is specified).
	 * \code <div data-<template>="{theme: 'aqua'}"></div>
	 * <script> $("body").<template>.load(); </script>\endcode
	 *
	 * \param {String} [attribute] The name of the attribute.
	 */
	$.fn.<template>.load = function(attribute) {
		if (typeof attribute === "undefined") {
			attribute = "data-<template>";
		}
		// Load the module(s)
		$(this).find("[" + attribute + "]").addBack("[" + attribute + "]").each(function() {
			try {
				var options = JSON.parse($(this).attr(attribute));
			}
			catch(e) {
				var options = {};
			}
			$(this).<template>(options);
		});
	};

})(jQuery);

/**
 * Auto-load the <template> modules for the tags with a data-<template> field
 * \private
 */
$(document).ready(function() {
	$().<template>.load.call($("body"));
});
