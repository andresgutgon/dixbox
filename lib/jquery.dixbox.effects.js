jQuery.extend( jQuery.dixbox,
{
    'slide': function () {
        var pdtb = $.dixbox.dbSize.padding.top + $.dixbox.dbSize.padding.bottom;
        var pdlr = $.dixbox.dbSize.padding.left + $.dixbox.dbSize.padding.right;

        if($.dixbox.defaults.position === 'top left') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display = 		'block';
            $.dixbox.dbBeforeAnimate.opacity = 		1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginTop = 		0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
        } else if ($.dixbox.defaults.position === 'top center') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.left =	 		'50%';
            $.dixbox.dbBeforeAnimate.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display =	  	'block';
            $.dixbox.dbBeforeAnimate.opacity =	  	1;
            // Size
            $.dixbox.dbSize.marginLeft = 			- ($.dixbox.dbSize.width + pdlr) / 2;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginTop = 		0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
        } else if ($.dixbox.defaults.position === 'top right') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.right =		0;
            $.dixbox.dbBeforeAnimate.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display =  	'block';
            $.dixbox.dbBeforeAnimate.opacity = 		1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginTop = 		0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = - ($.dixbox.dbSize.height + pdtb);
        } else if ($.dixbox.defaults.position === 'center left') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top =			0;
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.marginTop =	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display =  	'block';
            $.dixbox.dbBeforeAnimate.opacity =  	1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginTop =		- ($.dixbox.dbSize.height + pdtb) / 2;
            $.dixbox.dbAnimateOpen.top =			'50%';
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = - ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbAnimateClose.top = 		'0%';
        } else if ($.dixbox.defaults.position === 'center center') {
            // Size
            $.dixbox.dbSize.marginLeft =			- ($.dixbox.dbSize.width + pdlr) / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.top =			0;
            $.dixbox.dbBeforeAnimate.left =			'50%';
            $.dixbox.dbBeforeAnimate.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display = 		'block';
            $.dixbox.dbBeforeAnimate.opacity =  	1;
            // Animate Open
            $.dixbox.dbAnimateOpen.top =			'50%';
            $.dixbox.dbAnimateOpen.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = 	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbAnimateClose.top =			'0%';
        } else if ($.dixbox.defaults.position === 'center right') {
            // Size
            $.dixbox.dbSize.marginTop = 		- ($.dixbox.dbSize.height + pdtb);
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 		0;
            $.dixbox.dbBeforeAnimate.right = 	0;
            $.dixbox.dbBeforeAnimate.display = 	'block';
            $.dixbox.dbBeforeAnimate.opacity =  1;
            // Animate Open
            $.dixbox.dbAnimateOpen.top =		'50%';
            $.dixbox.dbAnimateOpen.marginTop = 	- ($.dixbox.dbSize.height + pdtb) / 2;
            // Animate Close
            $.dixbox.dbAnimateClose.marginTop = - ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbAnimateClose.top =		'0%';
        } else if ($.dixbox.defaults.position === 'bottom left') {
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom = 		0;
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.marginBottom =	- ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display = 		'block';
            $.dixbox.dbBeforeAnimate.opacity =  	1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginBottom = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginBottom = 		- ($.dixbox.dbSize.height + pdtb);
        } else if ($.dixbox.defaults.position === 'bottom center') {
            // Size
            $.dixbox.dbSize.marginLeft =			- $.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom = 		0;
            $.dixbox.dbBeforeAnimate.left = 		'50%';
            $.dixbox.dbBeforeAnimate.marginBottom = - ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display = 		'block';
            $.dixbox.dbBeforeAnimate.opacity =  	1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginBottom = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginBottom = 	- ($.dixbox.dbSize.height + pdtb);
        } else if ($.dixbox.defaults.position === 'bottom right') {
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom = 		0;
            $.dixbox.dbBeforeAnimate.right = 		0;
            $.dixbox.dbBeforeAnimate.marginBottom = - ($.dixbox.dbSize.height + pdtb);
            $.dixbox.dbBeforeAnimate.display = 		'block';
            $.dixbox.dbBeforeAnimate.opacity = 		1;
            // Animate Open
            $.dixbox.dbAnimateOpen.marginBottom = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.marginBottom = 	- ($.dixbox.dbSize.height + pdtb);
        }
    },
    'fade': function() {
        var pdtb = $.dixbox.dbSize.padding.top + $.dixbox.dbSize.padding.bottom;
        var pdlr = $.dixbox.dbSize.padding.left + $.dixbox.dbSize.padding.right;

        if($.dixbox.defaults.position === 'top left') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top =		0;
            $.dixbox.dbBeforeAnimate.left = 	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity = 	0;
        } else if ($.dixbox.defaults.position === 'top center') {
            // Size
            $.dixbox.dbSize.marginLeft =  			- ($.dixbox.dbSize.width + pdlr) / 2;
            // Before animate
            $.dixbox.dbSdbBeforeAnimateize.top =	0;
            $.dixbox.dbSdbBeforeAnimateize.left = 	'50%';
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 		1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  		0;
        } else if ($.dixbox.defaults.position === 'top right') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top =		0;
            $.dixbox.dbBeforeAnimate.right = 	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'center left') {
            // Size
            $.dixbox.dbSize.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.left = 	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            $.dixbox.dbBeforeAnimate.top =		'50%';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'center center') {
            // Size
            $.dixbox.dbSize.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            $.dixbox.dbSize.marginLeft =		- ($.dixbox.dbSize.width + pdlr) / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.display = 	'block';
            $.dixbox.dbBeforeAnimate.top = 		'50%';
            $.dixbox.dbBeforeAnimate.left = 	'50%';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'center right') {
            // Size
            $.dixbox.dbSize.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.right = 	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            $.dixbox.dbBeforeAnimate.top = 		'50%';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'bottom left') {
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom = 	0;
            $.dixbox.dbBeforeAnimate.left =		0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'bottom center') {
            // Size
            $.dixbox.dbSize.marginLeft =		- ($.dixbox.dbSize.width + pdlr) / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom =	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            $.dixbox.dbBeforeAnimate.left = 	'50%';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        } else if ($.dixbox.defaults.position === 'bottom right') {
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom =	0;
            $.dixbox.dbBeforeAnimate.right = 	0;
            $.dixbox.dbBeforeAnimate.display = 'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity = 	1;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  	0;
        }
    },
    'elastic': function() {
        var pdtb = $.dixbox.dbSize.padding.top + $.dixbox.dbSize.padding.bottom;
        var pdlr = $.dixbox.dbSize.padding.left + $.dixbox.dbSize.padding.right;

        if($.dixbox.defaults.position === 'top left') {
            // Size
            $.dixbox.dbSize.marginTop =				$.dixbox.dbSize.height / 2;
            $.dixbox.dbSize.marginLeft =			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop =  	0;
            $.dixbox.dbAnimateOpen.marginLeft =  	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		$.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft = 	$.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'top center') {
            // Size
            $.dixbox.dbSize.marginTop =				$.dixbox.dbSize.height / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.left = 		'50%';
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop =  	0;
            $.dixbox.dbAnimateOpen.marginLeft =  	- ($.dixbox.dbSize.width + pdlr) / 2;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft =	'+=' + $.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'top right') {
            // Size
            $.dixbox.dbSize.marginTop =				$.dixbox.dbSize.height / 2;
            $.dixbox.dbSize.marginRight =			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			0;
            $.dixbox.dbBeforeAnimate.right = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop =  	0;
            $.dixbox.dbAnimateOpen.marginRight = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =  		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		$.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginRight =	$.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'center left') {
            // Size
            $.dixbox.dbSize.marginLeft = 			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            $.dixbox.dbBeforeAnimate.top = 			'50%';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            $.dixbox.dbAnimateOpen.marginLeft = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft =  	'+=' + $.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'center center') {
            // Before animate
            $.dixbox.dbBeforeAnimate.top = 			'50%';
            $.dixbox.dbBeforeAnimate.left = 		'50%';
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop =		- ($.dixbox.dbSize.height + pdtb) / 2;
            $.dixbox.dbAnimateOpen.marginLeft = 	- ($.dixbox.dbSize.width + pdlr) / 2;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft =  	'+=' + $.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'center right') {
            // Size
            $.dixbox.dbSize.marginRight =			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.right = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.top = 			'50%';
            $.dixbox.dbBeforeAnimate.display = 		'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginTop = 		- ($.dixbox.dbSize.height + pdtb) / 2;
            $.dixbox.dbAnimateOpen.marginRight = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginTop =		'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginRight = 	'+=' + $.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'bottom left') {
            // Size
            $.dixbox.dbSize.marginBottom = 			$.dixbox.dbSize.height/ 2;
            $.dixbox.dbSize.marginLeft =			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom = 		0;
            $.dixbox.dbBeforeAnimate.left = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginBottom =	0;
            $.dixbox.dbAnimateOpen.marginLeft =  	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginBottom =	$.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft =	$.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'bottom center') {
            // Size
            $.dixbox.dbSize.marginBottom = 			$.dixbox.dbSize.height / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom =		0;
            $.dixbox.dbBeforeAnimate.left = 		'50%';
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginBottom =	0;
            $.dixbox.dbAnimateOpen.marginLeft =		- ($.dixbox.dbSize.width + pdlr) / 2;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginBottom =	'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginLeft = 	'+=' + $.dixbox.dbSize.width / 2;
        } else if ($.dixbox.defaults.position === 'bottom right') {
            // Size
            $.dixbox.dbSize.marginBottom =			$.dixbox.dbSize.height / 2;
            $.dixbox.dbSize.marginRight =			$.dixbox.dbSize.width / 2;
            // Before animate
            $.dixbox.dbBeforeAnimate.bottom =		0;
            $.dixbox.dbBeforeAnimate.right = 		0;
            $.dixbox.dbBeforeAnimate.width =		0;
            $.dixbox.dbBeforeAnimate.height =		0;
            $.dixbox.dbBeforeAnimate.display =  	'block';
            // Animate Open
            $.dixbox.dbAnimateOpen.opacity =  		1;
            $.dixbox.dbAnimateOpen.width =  		$.dixbox.dbSize.width;
            $.dixbox.dbAnimateOpen.height =  		$.dixbox.dbSize.height;
            $.dixbox.dbAnimateOpen.marginBottom =	0;
            $.dixbox.dbAnimateOpen.marginRight = 	0;
            // Animate Close
            $.dixbox.dbAnimateClose.opacity =		0;
            $.dixbox.dbAnimateClose.width =  		0;
            $.dixbox.dbAnimateClose.height =  		0;
            $.dixbox.dbAnimateClose.marginBottom =	'+=' + $.dixbox.dbSize.height / 2;
            $.dixbox.dbAnimateClose.marginRight = 	'+=' + $.dixbox.dbSize.width / 2;
        }
    }
});