let trimMap = null;

function trim(str, map) {
    trimMap = str.replace(/\r?\n/g, "");
    return trimMap;
}

function renderMap(str) {
    str = trim(str);
    let htmlMap = '';
    let x = 0;
    let y = 1;

    for (let i = 0; i < str.length; i++) {
        let pixel = str[i];

        if (i > 0 && i % MAP_WIDTH == 0) {
            htmlMap += '</div><div class="row">';
            y++;
            x = 0;
        }

        x++;

        htmlMap += `<span id="${x}T${y}" class="box ${textures[pixel].class}"></span>`;

        continue;
    }

    map.innerHTML = `<div class="row">${htmlMap}</div>`;
}

function checkPixel(x, y) {
    return textures[trimMap[(y - 1) * MAP_WIDTH + x - 1]].passable;
}