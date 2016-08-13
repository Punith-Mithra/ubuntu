(function () {
    'use strict';
    
    function createAccordion() {
        var isOpen = true;
        var accordion = $('<div class="accordion"><div class="header"> hello <a href="javascript:void(0);">+</a></div><div class="accordion-body"></div></div>');
        accordion.find('a').on('click', function (e) {
            var $accBody = $(this).parent().next();
            e.preventDefault();
            if(isOpen){
                $accBody.slideUp(500);
                isOpen = false;
            }else{
                $accBody.slideDown(500);
                isOpen = true;
            }
            
        });
        $('#container').append(accordion);
    }
    
    $('#add').on('click', function (event) {
        createAccordion();
    });
    
    createAccordion();
})();

