const tiles = () => document.querySelectorAll('.tile');
const buttons = () => document.querySelectorAll('.key');

class Game {
    index: number;

    constructor(i = 0) {
        this.index = i;
    }

    public try(char) {
        tiles().item(this.index).innerHTML = char;
        this.index += 1;
    }
}

// function isCharacterALetter(char) {
//     return (/[a-zA-Z]/).test(char)
// }

document.addEventListener("DOMContentLoaded", () => {
    let game = new Game();
    buttons().forEach(btn => {
        btn.addEventListener('pointerdown', () => {
            game.try(btn.id)
        });
    });

    document.addEventListener('keydown', event => {
        buttons().forEach(btn => {
            if (btn.id.toUpperCase() == event.key.toUpperCase()) {
                game.try(btn.id);
                btn.classList.add('key-board-down');
            }
        });
    });
    document.addEventListener('keyup', event => {
        buttons().forEach(btn => {
            if (btn.id.toUpperCase() == event.key.toUpperCase()) {
                btn.classList.remove('key-board-down');
            }
        });
    });
});