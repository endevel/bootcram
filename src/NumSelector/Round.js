
const itemCount = 24;
const minNumber = 1000;
const maxNumber = 10000;

class Round  {
    items = [];
    currentIndex = 0;

    createItems() {
        
        for (let i = 0; i < itemCount; i++) {
            this.items[i] = this.getRandomInt();
        }

        this.currentIndex = this.getIndex();
        return this.items;
    }

    getRandomInt() {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }

    getIndex() {
        return Math.floor(Math.random() * (itemCount + 1));
    }
}

export default Round;

