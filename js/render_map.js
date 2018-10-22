const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let trimMap = null;

function trim(str, map) {
    trimMap = str.replace(/\r?\n/g, "");
    return trimMap;
}

// const BOX_SIZE = 26;
// const MAP_WIDTH = 40;
// const MAP_HEIGTH = 24;

function renderMap(str) {
    str = trim(str);
    
	ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, BOX_SIZE * MAP_WIDTH, BOX_SIZE * MAP_HEIGTH);
    
    let x = 0;
    let y = 0;

    for (let i = 0; i < str.length; i++) {

        if (i > 0 && i % MAP_WIDTH == 0) {
            y += BOX_SIZE;
            x = 0;
        }

        ctx.drawImage(textures[str[i].toUpperCase()].image, x, y, BOX_SIZE, BOX_SIZE);

        x += BOX_SIZE;
    }
}

function checkPixel(x, y) {
    return textures[trimMap[(y - 1) * MAP_WIDTH + x - 1]].passable;
}