const map = document.getElementById('map');
const viewBox = document.getElementById('view-box');

const BOX_SIZE = 26;

const MAP_WIDTH = 40;
const MAP_HEIGTH = 24;
const VIEWBOX_WIDTH = 26;
const VIEWBOX_HEIGTH = 15;

renderMap(maps[0], map);

map.focus()

let user = createGeneralUser({
    map: map,
    viewBox: viewBox,
    user: {
        name: 'test',
        startX: 8,
        startY: 8
    }
});

function telephort(x, y) {
    user.x = x;
    user.y = y;
}
