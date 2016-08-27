window.onload = function() {

    /* Set page and hash location on page load */
    if(defined(window.location.hash)) {

        var hash = window.location.hash;
        menu((window.location.hash.substring(1)).split('/')[0]);
        window.location.hash = hash;
    }
}

window.onscroll = function() {

    var element = document.getElementById('top-page');

    if(defined(element) && element.style.display === 'none') {

        fadeIn(element, 300, 0.75);
    }
}

function refresh() {
    window.location = window.location.href;
}

function gotoTop(id) {

    var element = document.getElementById(id);

    if(defined(window.location.hash)) {

        var hash = window.location.hash.split('/')[0];
    }

    if(defined(element)) {

        var timeout = setTimeout(function() {

            fadeOut(element, 300, 0.75);

            if(defined(hash)) {

                window.location.hash = hash;
            }
        }, 100);
    }

    window.location.hash = '#';
}

function defined(element) {

    return typeof element !== 'undefined' && element !== null;
}

function menu(id) {

    var clickedButton = document.getElementById('menu-' + id);
    var clickedElement = document.getElementById('main-' + id);

    if(defined(clickedButton) && defined(clickedElement) && clickedElement.style.display === 'none') {

        if(id === 'home') {
            window.location.hash = '';
        }
        else {
            window.location.hash = id;
        }

        var buttons = document.getElementsByTagName('button');

        for(var i = 0; i < buttons.length; i++) {

            var button = buttons[i];
            var buttonElement = document.getElementById('main-' + button.id.replace('menu-', ''));

            if(defined(buttonElement)) {

                if(buttonElement.style.display === 'block') {

                    buttonElement.style.display = 'none';
                }

                if(button.className === 'menu-button-selected') {

                    button.className = 'menu-button';
                }
            }
        }

        fadeIn(clickedElement, 300, 1);
        clickedButton.className = 'menu-button-selected';
    }
}

function fadeIn(element, ms, limit) {

    if(defined(element) && defined(ms) && defined(limit)) {

        element.style.opacity = 0;
        element.style.display = 'block';
        element.style.filter = "alpha(opacity=0)";
    
        var opacity = 0;
        var interval = setInterval(function() {

            opacity += 50 / ms;
            if(opacity >= limit) {

                clearInterval(interval);
                opacity = limit;
            }

            element.style.opacity = opacity;
            element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    }
}


function fadeOut(element, ms, opacity) {

    if(defined(element) && defined(ms) && defined(opacity)) {
   
        var interval = setInterval( function() {

          opacity -= 50 / ms;
          if(opacity <= 0) {

            clearInterval(interval);
            opacity = 0;
            element.style.display = "none";
          }

            element.style.opacity = opacity;
            element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
        }, 50);
    }
}
