/*
 * DixBox - jQuery Plugin
 * http://dixso.net
 *
 * Copyright (c) 2012 Julio De La Calle Palanques
 * $Date: 2012/10/18 19:10:00
 * $version: 1.0
 */

;(function($) {

    $.dixbox = function (el, options) {

        var plugin 	= 	this;
        var $window = 	$(window);

        if(el != undefined) {
            var $el = 	$(el.currentTarget);
        }

        // Extend the object '$.dixbox.defaults' with 'options'.
        plugin.settings = $.extend($.dixbox.defaults, options);

        // Create the objects.
        $.dixbox.dbSize = 			{};
        $.dixbox.dbBeforeAnimate = 	{};
        $.dixbox.dbAnimateOpen = 	{};
        $.dixbox.dbAnimateClose = 	{};

        // Methods of the dixbox.
        $.dixbox.methods = {
            'init': function() {
                // Store the scroll position.
                $.dixbox.scroll = $window.scrollTop();

                // If the parameter 'url' equals null search the 'href' or the 'data-dixbox'.
                if (plugin.settings.url == null) {
                    if($el.attr('href') != undefined) {
                        plugin.settings.url = unescape($el.attr('href'));
                    } else if ($el.data('dixbox') != undefined) { // Found that there 'data-dixbox'.
                        plugin.settings.url = unescape($el.data('dixbox'));
                    }
                }

                // Check of the overlay.
                if((plugin.settings.modal) && (plugin.overlay === undefined)) {
                    plugin.overlay = $(document.getElementsByTagName('body')[0].appendChild(_create('dbOverlay', {
                        'position': 			'fixed'
                        ,'top': 				0
                        ,'left': 				0
                        ,'width': 				'100%'
                        ,'height': 				'100%'
                        ,'display': 			'none'
                        ,'opacity': 			0
                        ,'z-index': 			$.dixbox.defaults.zIndex
                        ,'background-color': 	$.dixbox.defaults.backgroundColorOverlay
                    }))).css('display','block').animate({'opacity': plugin.settings.opacity}, {
                        'duration':  	plugin.settings.speedOverlay[0]
                        ,'complete': 	function () {
                                            $.dixbox.methods.load();
                                        }
                        }
                    );
                } else {
                    $.dixbox.methods.load();
                }

            },
            'load': function () {
                if(plugin.settings.appendTo) {
                    // Create the content and insert it in the item of the DOM.
                    plugin.content = $(_content()).appendTo(plugin.settings.appendTo);
                } else {
                    // Create the content and insert in the DOM.
                    plugin.content = $(document.getElementsByTagName('body')[0].appendChild(_content()));
                }

                // Method for key 'Esc'
                if (plugin.settings.escKey) {
                    $(document).on('keyup', function () {
                        // Remove all events.
                        $(this).unbind();
                        // Close modal.
                        $.dixbox.methods.close();
                    });
                }

                // Go ajax!
                $.ajax({
                    'url': 			plugin.settings.url
                    ,'cache':		plugin.settings.cache
                    ,'beforeSend':	function () {
                                        // Delete object.
                                        delete plugin.settings.url;

                                        // Check if callback 'onOpen'.
                                        if ((plugin.settings.onOpen) && (typeof(plugin.settings.onOpen == 'function'))) {
                                            plugin.settings.onOpen(undefined != arguments[0] ? arguments[0]: '');
                                        }
                                    }
                    ,'complete':	function (jqXHR, textStatus) {
                                        // If different 'success' has been an error.
                                        if((textStatus != 'success') && (plugin.settings.onError) && (typeof(plugin.settings.onError == 'function'))) {
                                            plugin.settings.onError(undefined != arguments[0] ? arguments[0] : '');
                                            // If there is active overlay and click to close the overlay.
                                            if ((plugin.settings.modal) && (plugin.settings.overlayClose)) {
                                                plugin.overlay.on('click', function () {
                                                    // Remove all events.
                                                    $(this).unbind();
                                                    // Close modal.
                                                    $.dixbox.methods.close();
                                                });
                                            }
                                        }
                                    }
                    ,'success': 	function (data, text, request) {
                                        // Cache object in a jQuery ajax content received.
                                        var $data = $(data);

                                        // Create the object temporal.
                                        var tmpSize = {
                                            'width': 	parseInt(plugin.settings.width)
                                            ,'height': 	parseInt(plugin.settings.height)
                                        };

                                        // Check width: If it is a number and if greater than '0'.
                                        if (!isNaN(tmpSize.width) && tmpSize.width == plugin.settings.width && tmpSize.width.toString() == plugin.settings.width.toString() && tmpSize.width > 0) {
                                            $.dixbox.dbSize.width = tmpSize.width;
                                        } else {
                                            $.dixbox.dbSize.width = $data.outerWidth();
                                        }

                                        // Check height: If it is a number and if greater than '0'.
                                        if (!isNaN(tmpSize.height) && tmpSize.height == plugin.settings.height && tmpSize.height.toString() == plugin.settings.height.toString() && tmpSize.height > 0) {
                                            $.dixbox.dbSize.height = tmpSize.height;
                                        } else {
                                            $.dixbox.dbSize.height = $data.outerHeight();
                                        }

                                        // Delete object.
                                        delete tmpSize;

                                        // Store in '$.dixbox.dbSize' the padding.
                                        $.dixbox.dbSize.padding = {
                                            'top': 		isNaN(parseInt($data.css('padding-top')))
                                            ,'right': 	isNaN(parseInt($data.css('padding-right')))
                                            ,'bottom': 	isNaN(parseInt($data.css('padding-bottom')))
                                            ,'left': 	isNaN(parseInt($data.css('padding-left')))
                                        };

                                        // Check if we can extend 'jQuery.dixbox'.
                                        if (plugin.settings.effect in jQuery.dixbox) {
                                            $.dixbox[plugin.settings.effect]();
                                        } else {
                                            // Define default parameters.
                                            $.dixbox.dbSize.top = 			'50%';
                                            $.dixbox.dbSize.left = 			'50%';
                                            $.dixbox.dbSize.opacity = 		1;
                                            $.dixbox.dbSize.marginTop = 	- ($.dixbox.dbSize.height + $.dixbox.dbSize.padding.top + $.dixbox.dbSize.padding.bottom) / 2;
                                            $.dixbox.dbSize.marginLeft = 	- ($.dixbox.dbSize.width + $.dixbox.dbSize.padding.left + $.dixbox.dbSize.padding.right) / 2;
                                            $.dixbox.dbSize.display = 		'block';
                                        }

                                        // Extend the object '$.dixbox.dbBeforeAnimate' with '$.dixbox.dbSize'.
                                        for (var obj in $.dixbox.dbBeforeAnimate) {
                                            $.dixbox.dbSize[obj] = $.dixbox.dbBeforeAnimate[obj];
                                        }

                                        // Check the height of the window is smaller than the modal content.
                                        if($window.height() < $.dixbox.dbSize.height) {
                                            // Position the scroll to the top.
                                            window.top.scroll(0, 0);
                                            $.dixbox.dbAnimateOpen.top 			= plugin.settings.top;
                                            $.dixbox.dbAnimateOpen.marginTop 	= 0;
                                            $.dixbox.dbSize.position 			= 'absolute';
                                        } else {
                                            // Hide the scroll of the body.
                                            document.getElementsByTagName('body')[0].style.setProperty('overflow-y', 'hidden');
                                        }

                                        // Copy background-color to the modal content.
                                        $.dixbox.dbSize.backgroundColor 		= $data.css('backgroundColor');

                                        // Add the content and pass the object '$.dixbox.dbSize, then  pass the animation '$.dixbox.dbAnimateOpen'.
                                        plugin.content.html(data).css($.dixbox.dbSize).animate($.dixbox.dbAnimateOpen, {
                                            'duration': 	plugin.settings.speedContent[0]
                                            ,'easing': 		(plugin.settings.easingOn in jQuery.easing ? plugin.settings.easingOn : '')
                                            ,'complete': 	function () {
                                                                // Check if callback 'onComplete'.
                                                                if((plugin.settings.onComplete) && (typeof(plugin.settings.onComplete == 'function'))) {
                                                                    plugin.settings.onComplete(undefined != arguments[0] ? arguments[0] : '');
                                                                }

                                                                // If there is active overlay and click to close the overlay.
                                                                if ((plugin.settings.modal) && (plugin.settings.overlayClose)) {
                                                                    plugin.overlay.on('click', function () {
                                                                        // Remove all events.
                                                                        $(this).unbind();
                                                                        // Close modal.
                                                                        $.dixbox.methods.close();
                                                                    });
                                                                }
                                                            }
                                        });

                                    }
                });
            },
            'close': function () {
                 // Check the height of the window is smaller than the modal content.
                if($window.height() < $.dixbox.dbSize.height) {
                    $.dixbox.dbAnimateClose.marginTop = $.dixbox.dbAnimateClose.marginTop - plugin.settings.top;
                }
                plugin.content.stop().animate($.dixbox.dbAnimateClose, {
                    'duration': 	plugin.settings.speedContent[1]
                    ,'easing': 		(plugin.settings.easingOff in jQuery.easing ? plugin.settings.easingOff : '')
                    ,'complete': 	function () {
                                        // Check the height of the window is smaller than the modal content.
                                        if($window.height() < $.dixbox.dbSize.height) {
                                            // Go to the position where the user was.
                                            window.top.scroll(0, $.dixbox.scroll);
                                        } else {
                                            // Show the scroll of the body.
                                            document.getElementsByTagName('body')[0].style.setProperty('overflow-y', 'auto');
                                        }

                                        // Remove the content.
                                        plugin.content.remove();

                                        // Delete the object.
                                        delete plugin.content;

                                        // Check overlay.
                                        if(plugin.settings.modal) {
                                            plugin.overlay.fadeOut(plugin.settings.speedOverlay[1], function () {
                                                // Remove the overlay.
                                                plugin.overlay.remove();

                                                // Delete the object.
                                                delete plugin.overlay;

                                                // Check if callback 'onClose'.
                                                if((plugin.settings.onClose) && (typeof(plugin.settings.onClose == 'function'))) {
                                                    plugin.settings.onClose(undefined != arguments[0] ? arguments[0] : '');
                                                }
                                            });
                                        }

                                    }
                });
            },
            'resize': function () {
                // Define vars.
                var maxWidth 	= 0;
                var maxHeight 	= 0;

                // Loop all elements found.
                plugin.content.find('*').each(function () {
                    // Cache element.
                    var $this = $(this);

                    // Calculating the width.
                    var calcWidth = parseInt($this.outerWidth()) + ((parseInt($this.offset().left) - parseInt(plugin.content.offset().left)));
                    // Check which one is bigger.
                    if(calcWidth > maxWidth) {
                        maxWidth = calcWidth;
                    }

                    // Calculating the height.
                    var calcHeight = parseInt($this.outerHeight()) + ((parseInt($this.offset().top) - parseInt(plugin.content.offset().top)));
                    // Check which one is bigger.
                    if(calcHeight > maxHeight) {
                        maxHeight = calcHeight;
                    }
                });

                $.dixbox.dbSize.width = 	maxWidth;
                $.dixbox.dbSize.height = 	maxHeight;

                // Check if we can extend 'jQuery.dixbox'.
                if (plugin.settings.effect in jQuery.dixbox) {
                    $.dixbox[plugin.settings.effect]();
                } else {
                    // Define default parameters.
                    $.dixbox.dbSize.marginTop = 	- ($.dixbox.dbSize.height + $.dixbox.dbSize.padding.top + $.dixbox.dbSize.padding.bottom) / 2;
                    $.dixbox.dbSize.marginLeft = 	- ($.dixbox.dbSize.width + $.dixbox.dbSize.padding.left + $.dixbox.dbSize.padding.right) / 2;
                }

                // Extend the object '$.dixbox.dbAnimateOpen' with '$.dixbox.dbSize'.
                for (var obj in $.dixbox.dbAnimateOpen) {
                    $.dixbox.dbSize[obj] = $.dixbox.dbAnimateOpen[obj];
                }

                // Check the height of the window is smaller than the modal content.
                if($window.height() < $.dixbox.dbSize.height) {
                    // Position the scroll to the top.
                    window.top.scroll(0, 0);
                    // Insert the style.
                    $.dixbox.dbSize.top 		= plugin.settings.top;
                    $.dixbox.dbSize.marginTop 	= 0;
                    // Show the scroll of the body.
                    document.getElementsByTagName('body')[0].style.setProperty('overflow-y', 'auto');
                }

                // Animation resize.
                plugin.content.stop().animate($.dixbox.dbSize, {
                    'duration': 	plugin.settings.speedContent[2]
                    ,'complete': 	function () {
                                        // Check the height of the window is smaller than the modal content.
                                        if($window.height() < $.dixbox.dbSize.height) {
                                            // Insert the position absolute.
                                            $(this).css('position', 'absolute');
                                        }
                                        // Check if callback 'onCompleteResize'.
                                        if((plugin.settings.onCompleteResize) && (typeof(plugin.settings.onCompleteResize == 'function'))) {
                                            plugin.settings.onCompleteResize(undefined != arguments[0] ? arguments[0] : '');
                                        }
                                    }
                });
            }
        };

        // Init dixbox.
        $.dixbox.methods.init();
    };

    // Define default parameters.
    $.dixbox.defaults = {
        'backgroundColorOverlay': 	'#000'			// Background of the overlay.
        ,'zIndex': 					9998			// z-index of the modal: overlay 9998, content 9999.
        ,'opacity': 				.8				// Opcity of the overlay.
        ,'width':					0				// If '0', automatically calculates the width.
        ,'height':					0				// If '0', automatically calculates the height.
        ,'escKey': 					true			// Activate the 'Esc' key to close the modal.
        ,'modal': 					true			// Show the overlay.
        ,'overlayClose': 			true			// Modal closes pressing the overlay.
        ,'customClass':				''				// Add class to modal.
        ,'url':						null			// Parameter to open: url.
        ,'onOpen':					null			// Callback on open to the modal.
        ,'onComplete':				null			// Callback on complete to the modal.
        ,'onCompleteResize':		null			// Callback on resize to the modal.
        ,'onClose':					null			// Callback on close to the modal.
        ,'onError':					null			// Callback to be executed if an error.
        ,'effect': 					'slide'			// Effect type: elastic, slide, fade or show.
        ,'position': 				'top left'		// Positioning modal.
        ,'easingOn': 				null			// Action entry effect, null if we do not want any.
        ,'easingOff': 				null			// Output effect action, null if not want any.
        ,'speedOverlay': 			[300, 300]		// Animation speed in milliseconds for the overlay. First position: open; Second position: close; Third positionn: resize.
        ,'speedContent': 			[800, 800, 300]	// Animation speed in milliseconds for the content. First position: open; Second position: close; Third positionn: resize.
        ,'cache':					false			// Cache ajax call.
        ,'appendTo':				null			// Element to insert the modal.
        ,'top':						100				// Separation of the top margin in pixel (px) where the modal is larger than the window.
    };

    // Function to create an element (div) with styles.
    var _create = function (eClass, style) {
        // Create the div.
        var div = document.createElement('div');

        // Add the class.
        div.className = eClass;

        // Loop with styles (obj).
        for (obj in style) {
            div.style.setProperty(obj, style[obj]);
        }

        return div;
    };

    // Function to create the content.
    var _content = function () {
        return _create('dbContent' + ($.dixbox.defaults.customClass ? ' ' + $.dixbox.defaults.customClass : ''), {
            'position':				'fixed'
            ,'float':				'left'
            ,'display':				'none'
            ,'opacity':				0
            ,'z-index': 			$.dixbox.defaults.zIndex + 1
        });
    };

})(jQuery);