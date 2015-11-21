(function() {
    var clickable = {
        elements: document.querySelectorAll('[data-href]'),

        redirect_to: function(href, target) {
            target = target || "";
            clickable.simulate_anchor(href, target);
        },

        simulate_anchor: function(href, target) {
            var anchor = document.createElement("a");
            anchor.setAttribute('href', href);
            anchor.setAttribute('target', target);
            anchor.click();
        },

        init: function() {
            for (var i = 0; i < this.elements.length; i++) {
                var element = this.elements[i];
                element.style.cursor = 'pointer';
                element.addEventListener('click', function() {
                    if ($(this).attr('data-target') == "_blank") {
                        var win = window.open($(this).attr('data-href'), '_blank');
                        win.focus();
                    } else {
                        window.location = $(this).attr('data-href');
                    }
                    // clickable.redirect_to(
                    //     this.getAttribute('data-href'),
                    //     this.getAttribute('data-target')
                    // );
                }, false);
            }
        }
    };

    clickable.init();
})();