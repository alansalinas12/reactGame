import * as image from "../../public/images";

export default () => {
    let cards = [];

    for (let i = 0; i < 16; i += 2) {
        let index = Math.floor(Math.random() * 1000);

        cards.push({
            id: i,
            rel: i + 1,
            flipped: false,
            url: ""
        });
        cards.push({
            id: i + 1,
            rel: i,
            flipped: false,
        });
    }

    return shuffle(cards);
}

function shuffle(array: { id: number; rel: number; flipped: boolean; url: string; }[]) {
    let currentIndex = array.length, temp, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}
