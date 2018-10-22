function createGeneralUser(options) {
    options.map.style.width = `${BOX_SIZE * MAP_WIDTH}px`;
    options.map.style.height = `${BOX_SIZE * MAP_HEIGTH}px`;

    options.viewBox.style.width = `${BOX_SIZE * VIEWBOX_WIDTH}px`;
    options.viewBox.style.height = `${BOX_SIZE * VIEWBOX_HEIGTH}px`;
    
    moveMapX(options.user.startX)
    moveMapY(options.user.startY)
    
    let userControl = new CreateControlUser(options.user);

    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) {
        if (e.keyCode == 37) {
            // left
            if (userControl.currentX - 1 < 1) return;
            if (!checkPixel(userControl.currentX - 1, userControl.currentY)) return;
            userControl.x = userControl.currentX - 1;
        } else if (e.keyCode == 38) {
            // up
            if (userControl.currentY - 1 < 1) return;
            if (!checkPixel(userControl.currentX, userControl.currentY - 1)) return;
            userControl.y = userControl.currentY - 1;
        } else if (e.keyCode == 39) {
            // right
            if (userControl.currentX + 1 > MAP_WIDTH) return;
            if (!checkPixel(userControl.currentX + 1, userControl.currentY)) return;
            userControl.x = userControl.currentX + 1;
        } else if (e.keyCode == 40) {
            // down
            if (userControl.currentY + 1 > MAP_HEIGTH) return;
            if (!checkPixel(userControl.currentX, userControl.currentY + 1)) return;
            userControl.y = userControl.currentY + 1;
        }
    }

    return userControl;
}

function moveMapX(userPosition) {
    if (MAP_WIDTH - VIEWBOX_WIDTH + (Math.floor(VIEWBOX_WIDTH/2) + 1) < userPosition) {
        TweenMax.to(mapWrapper, 0.150, {
            left: `-${getPositionFromCoordsMap(MAP_WIDTH - VIEWBOX_WIDTH)}px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    } else if ((1 - userPosition) + (Math.floor(VIEWBOX_WIDTH/2)) > 0) {
        TweenMax.to(mapWrapper, 0.150, {
            left: `0px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    } else {
        TweenMax.to(mapWrapper, 0.150, {
            left: `${getPositionFromCoordsMap((1 - userPosition) + (Math.floor(VIEWBOX_WIDTH/2)))}px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    }
}

function moveMapY(userPosition) {
    if (MAP_HEIGTH - VIEWBOX_HEIGTH + (Math.ceil(VIEWBOX_HEIGTH/2)) < userPosition) {
        TweenMax.to(mapWrapper, 0.150, {
            top: `-${getPositionFromCoordsMap(MAP_HEIGTH - VIEWBOX_HEIGTH)}px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    } else if ((1 - userPosition) + (Math.round(VIEWBOX_HEIGTH/2) - 1) > 0) {
        TweenMax.to(mapWrapper, 0.150, {
            top: `0px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    } else {
        TweenMax.to(mapWrapper, 0.150, {
            top: `-${getPositionFromCoordsMap(userPosition - (Math.ceil(VIEWBOX_HEIGTH/2)))}px`,
            onComplete: function() { 
                // console.log('complete')
        }})
    }
}

function getPositionFromCoords(value) {
    return (value - 1) * BOX_SIZE;
}

function getPositionFromCoordsMap(value) {
    return (value - 0) * BOX_SIZE;
}

function spaun(user) {    
    let pers = document.createElement('span');
        pers.classList.add('box')
        pers.classList.add('pers')

        pers.style.left = `${getPositionFromCoords(user.startX)}px`
        pers.style.top = `${getPositionFromCoords(user.startY)}px`

        pers.dataset.name = user.name;

    mapWrapper.appendChild(pers);

    return pers;
}

function CreateControlUser(user) {
    this.currentX = user.startX;
    this.currentY = user.startY;

    let pers = spaun(user)

    Object.defineProperty(this, 'x', {
        set: function(x) {
            //запрос на сервер и отправка новых координат

        let position = getPositionFromCoords(x);

        TweenMax.to(pers, 0.150, {
            left: `${position}px`,
            onComplete: function() { 
                // console.log('complete')
        }})

        this.currentX = x;
        moveMapX(x)
        },
        get: function() {
            return undefined;
        }
    })

    Object.defineProperty(this, 'y', {
        set: function(y) {
            //запрос на сервер и отправка новых координат

        let position = getPositionFromCoords(y);

        TweenMax.to(pers, 0.150, {
            top: `${position}px`,
            onComplete: function() { 
                // console.log('complete')
        }})


        this.currentY = y;
        moveMapY(y)
        },
        get: function() {
            return undefined;
        }
    })
}