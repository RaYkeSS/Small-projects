class Header {
    constructor() {

    }

    handleGetHeaderLocalStorage(key) {
        const localList = localStorageUtil.getHeaderLocalStorage(key);
        return localList;
    }

    doneCounter(key) {
        const storage = this.handleGetHeaderLocalStorage(key)
        const totalCounted = storage.length;
        const doneCounted = storage.reduce((acc, i) => {
            if(i.done) {
                acc++
            }
            return acc
        }, 0);
        return [doneCounted, totalCounted]
    }

    render() {
        const nav = document.createElement('nav');
        const my = document.createElement('a');
        const shopping = document.createElement('a');
        const myCounter = document.createElement('span');
        const shoppingCounter = document.createElement('span');

        nav.classList.add('flex', 'gap-5');
        my.classList.add('flex', 'gap-1.5', 'bg-[color:hsl(201,_65%,_32%,_10%)]', 'p-2', 'rounded-lg', 'hover:bg-[#1D6287]', 'transition-all', 'ease-in-out', 'delay-30');
        shopping.classList.add('flex', 'gap-1.5', 'bg-[color:hsl(201,_65%,_32%,_10%)]', 'p-2', 'rounded-lg', 'hover:bg-[#1D6287]', 'transition-all', 'ease-in-out', 'delay-30');

        my.href = '/index.html';
        shopping.href = '/shopping.html';

        my.innerText = 'My';
        shopping.innerText = 'Shopping';

        let [myDone, myTotal] = this.doneCounter('My');
        let [shoppingDone, shoppingTotal] = this.doneCounter('Shopping');

        myCounter.innerText = `(${myDone} / ${myTotal})`;
        shoppingCounter.innerText = `(${shoppingDone} / ${shoppingTotal})`;

        document.addEventListener('click', (e) => {
            if(e.target.closest('button')) {
                [myDone, myTotal] = this.doneCounter('My');
                myCounter.innerText = `(${myDone} / ${myTotal})`;

                [shoppingDone, shoppingTotal] = this.doneCounter('Shopping');
                shoppingCounter.innerText = `(${shoppingDone} / ${shoppingTotal})`;
            }

        })

        my.append(myCounter);
        shopping.append(shoppingCounter);
        nav.append(my, shopping);
        ROOT_HEADER.append(nav);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const headerPage = new Header();

    headerPage.render()
})
