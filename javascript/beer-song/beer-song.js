class BeerSong {
    constructor() { }

    sing(start, end = 0) {
        return this.verse(start) + ((start !== end)?"\n" + this.sing(start - 1, end):"");
    }

    verse(num) {
        let verse = this.replace`${num} ${BeerSong.bottles(num)} of beer on the wall, ${num} ${BeerSong.bottles(num)} of beer.\n`;

        if (num) {
            verse += this.replace`Take ${(num === 1) ? 'it' : 'one'} down and pass it around, ${num - 1} ${BeerSong.bottles(num - 1)} of beer on the wall.\n`;
        } else {
            verse += "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
        }

        return verse;
    }

    replace(strings, ...subs) {
        let result = "";

        subs.forEach(function(sub, index, subs) {
            let str = sub;
            if (str === 0) {
                if (index === 0) {
                    str = 'No more';
                } else {
                    str = 'no more';
                }
            }

            result += strings[index] + str;
        });

        result += strings[strings.length - 1];

        return result;
    }

    static bottles(num) {
        return (num === 1) ? "bottle" : "bottles";
    }
}

module.exports = new BeerSong();