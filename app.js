$(document).ready(function () {

    $(document).on('keydown', handleTyping);

    var score = 0;

    var pacman = {
        x: 6,
        y: 4
    };

    function handleTyping(event) {
        switch (event.which) {
            case (37): // PACMAN MOVE LEFT
                if (map[pacman.y][pacman.x-1] !== 1){
                    map[pacman.y][pacman.x] = 3;
                    pacman.x -= 1;
                    map[pacman.y][pacman.x] = 4;
                    if ((map[pacman.y][pacman.x-1] === 2)) {
                        score++
                    }
                    createWorld();
                } break;
            case (38): // PACMAN MOVE UP
                if ( map[pacman.y-1][pacman.x] !== 1){
                    map[pacman.y][pacman.x] = 3;
                    pacman.y -= 1;
                    map[pacman.y][pacman.x] = 4;
                    if ((map[pacman.y-1][pacman.x] === 2)) {
                        score++
                    }
                    createWorld();
                } break;
            case (39): // PACMAN MOVE RIGHT
                if ( map[pacman.y][pacman.x+1] !== 1){
                    map[pacman.y][pacman.x] = 3;
                    pacman.x += 1;
                    map[pacman.y][pacman.x] = 4;
                    if ((map[pacman.y][pacman.x+1] === 2)) {
                        score++
                    }
                    createWorld();
                } break;
            case (40): // PACMAN MOVE DOWN
                if ( map[pacman.y+1][pacman.x] !== 1){
                    map[pacman.y][pacman.x] = 3;
                    pacman.y += 1;
                    map[pacman.y][pacman.x] = 4;
                    if ((map[pacman.y+1][pacman.x] === 2)) {
                        score++
                    }
                    createWorld();
                } break;
        }
        moveGhosts();
        console.log(score)

    }

    var ghost = {
        x: 3,
        y: 3
    };

    function moveGhosts() {
        var numero = Math.floor(Math.random() * 4) + 1;
        console.log('random numero from 1 to 4', numero);
        if (numero === 1 && map[ghost.y][ghost.x+1] !== 1) {
            map[ghost.y][ghost.x] = 3;
            ghost.x += 1;
            map[ghost.y][ghost.x] = 5;
            console.log(ghost, 'x+1', numero = 1 && map[ghost.y][ghost.x+1] !== 1);
            createWorld()
        } else if (numero === 2 && map[ghost.y][ghost.x-1] !== 1) {
            map[ghost.y][ghost.x] = 3;
            ghost.x -= 1;
            map[ghost.y][ghost.x] = 5;
            console.log(ghost, 'x-1');
            createWorld()
        } else if (numero === 3 && map[ghost.y+1][ghost.x] !== 1) {
            map[ghost.y][ghost.x] = 3;
            ghost.y += 1;
            map[ghost.y][ghost.x] = 5;
            console.log(ghost, 'y+1');
            createWorld()
        } else if (numero === 4 && map[ghost.y-1][ghost.x] !== 1) {
            map[ghost.y][ghost.x] = 3;
            ghost.y -= 1;
            map[ghost.y][ghost.x] = 5;
            console.log(ghost, 'y-1');
            createWorld()
        }
    }

    //1 is wall, 2 coin, 3 ground and 4 pacman

    var map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,2,2,2,2,2,1,2,2,2,2,2,1],
        [1,2,1,1,1,2,1,2,1,1,1,2,1],
        [1,2,1,5,2,2,2,2,2,2,1,2,1],
        [1,2,2,2,1,1,4,1,1,2,2,2,1],
        [1,2,1,2,2,2,2,2,2,2,1,2,1],
        [1,2,1,1,2,2,1,2,2,1,1,2,1],
        [1,2,2,2,2,2,1,2,2,2,2,2,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

    var element = document.getElementById('realm');
    function createWorld() {
        element.innerHTML = '';
        for (var y=0;y<map.length;y+=1) {
            for (var x = 0;x<map[y].length;x+=1) {
                if (map[y][x]===1) {
                    element.innerHTML += '<div class="wall"></div>'
                } else if (map[y][x]===2) {
                    element.innerHTML += '<div class="coin"></div>'
                } else if (map[y][x]===3) {
                    element.innerHTML += '<div class="ground"></div>'
                } else if (map[y][x]===4) {
                    element.innerHTML += '<div class="pacman"></div>'
                } else if (map[y][x]===5) {
                    element.innerHTML += '<div class="ghost"></div>'
                }
            }
            element.innerHTML += '<br>'
        }
    }
    createWorld()
});