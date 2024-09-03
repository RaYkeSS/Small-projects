const data = document.querySelector('.data');
const nums = document.querySelector('.numbers');
const operations = document.querySelector('.operations');

let a = null;
let b = null;
let result = 0;
let cache = [];
let cacheOp = [];

nums.addEventListener('click', function(e) {
    if(!e.target.closest('button')) return;
    data.lastElementChild.value += e.target.dataset.id;

    a = +data.lastElementChild.value;
    // data.lastElementChild.value = '';
    if(cache.length === 0) {
        cache.push(a);
    }
})



operations.addEventListener('click', function(e) {
    if(!e.target.closest('button')) return;


    const operation = e.target.dataset.oper 
    if(operation === 'AC') {
        data.firstElementChild.value = '';
        data.lastElementChild.value = '';
        data.lastElementChild.placeholder = 0;
        cache.length = 0
        a = 0;
        b = 0;
        result = 0;
    }

    if (operation === '/' || operation === '*' || operation === '-' || operation === '+') {

        if(!data.lastElementChild.value) return;

        data.lastElementChild.value = '';

        cacheOp.push(operation);

        b = cache[cache.length - 1] > 0 ? cache[cache.length - 1] : null;


        if(Number(b) ? 1 : -1) {
            result = calculate({a: Number(a), b: Number(b), operation: operation});
            data.lastElementChild.placeholder = result;
            cache.push(result);

        }

        let cacheMemory = cache.reduce((acc, el, i) => {
            acc.push(el, cacheOp[i]);
            return acc
        }, []);

        data.firstElementChild.value = cacheMemory.join(' ');

        console.log(a);
        console.log(operation);
        console.log(b);
        console.log(cache);



    }

    if (operation === '=') {
        // data.lastElementChild.value = '';
        data.lastElementChild.value = cache[cache.length - 1];
    }
})