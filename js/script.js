$(document).ready(function() {

    const $nav = $('.container');
    const $line = $('.line-menu');
    const $active = $('.active');
    const $pos = 0;
    const $width = '';

    $('.list-item').on('click', function(){
        // This = riferimento all'oggetto che lo richiama tra graffe in questo caso ($('.list-item')), lo salvo in una variablie per poi riutilizzarlo in seguito quando mi serve.
        const $this_nav = $(this)
        // Animate code: Il metodo position restituisce la posizione rispetto a top/left di un elemento, a me serve solo left.
        $line.animate({
            left: $this_nav.position().left,
            // Tengo coto del padding
            width: $this_nav.width() + 60,
            opacity: 1
        });

        $('.list-item').removeClass('active')

        if(!$this_nav.hasClass('active')) {
            $this_nav.addClass('active');
        }
    })

    const $active_width = $active.width();
    $line.css({width: $active_width + 60}) 

})

