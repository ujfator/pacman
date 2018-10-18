$(document).ready(function () {
    console.log('j querko has loaded');
    
    $(document).on('keydown', handleTyping);

    var pacman = {};
    pacman.x = 20;
    pacman.y = 5;

    $('#pacman').change(function () {
        console.log(pacman, 'pacman')
    });
    
    function handleTyping(event) {
        let $pacmanImg =  $('#pacman');
        console.log('typing', event.which, pacman, pacman.x > 0);
        if (event.which === 37 && (pacman.x !== 0)) {
            console.log('condition is fine')
        } else {
            console.log('it is not fine')
        }
        switch(event.which) {
            case (37): $pacmanImg.css({
                'left': (pacman.x -= 10) + 'px'
            });
                break;
            case 38: $pacmanImg.css({
                'top': (pacman.y -= 10) + 'px'
            });
                break;
            case (39): $pacmanImg.css({
                'left': (pacman.x += 10) + 'px'
            });
                break;
            case 40: $pacmanImg.css({
                'top': (pacman.y += 10) + 'px'
            });
                break;
        }
    }
});