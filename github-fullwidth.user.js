// ==UserScript==
// @id            github_fullwidth
// @name          Switches github.com windows to be full width
// @version       1.1
// @author        djeebus
// @description   Stretches all github windows to the full width of the browser window.
// @include       http://code.corp.surveymonkey.com/*
// @include       http://github.com/*
// @include       https://github.com/*
// @updateURL	  https://github.com/djeebus/userscripts/github-fullwidth.user.js
// ==/UserScript==

var cssToggles = [
    { 
        selector: '#js-repo-pjax-container', 
        newCss: {
            'margin': '0 4em',
            'width': 'auto'
        }
	},
    {
        selector: 'ul.tabs',
        newCss: {
            'width': '800px',
            'margin': '0 auto'
        }
    },
    {
        selector: '.container',
        newCss: {
			'margin': '0 4em',
            'width': 'auto'
        }
    },
    {
        selector: '#slider .frames',
        newCss: {
            'width': 'auto'
        }
    },
    {
        selector: '#slider .frames .frame',
        newCss: {
            'width': 'auto',
            'float': 'none',
            'margin': '0'        
        }
    }
];

function toggleCss() {
    for (var x = 0; x < cssToggles.length; x++) {
        var item = cssToggles[x];
        
        var $element = $(item.selector);

        var props = [];
        for (var key in item.newCss) {
            props[props.length] = key;
        }
        
        item.current = $element.css(props);
        
        $element.css(item.newCss);
        
        var tmp = item.current;
        item.current = item.newCss;
        item.newCss = tmp;
	}
}

$(document).ready(function () {
    var $button = $('<a href="javascript:void(0)" class="minibutton"><span class="text">Full Width</span></a>').click(function () {
        toggleCss();
    });
    
    $('.pagehead-actions').append($('<li></li>').append($button));
});