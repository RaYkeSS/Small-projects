class List {
    constructor(name, page, arrName) {
        this.name = name;
        this.page = page;
        this.arrName = arrName;
    }

    handleSetLocalStorage({ name, id, done }) {
        localStorageUtil.setList({ name, id, done });
    }

    handleDeleteLocalStorage(id) {
        localStorageUtil.removeList(id)
    }

    handleGetLocalStorage(obj) {
        let localList = localStorageUtil.getList();

        localList.forEach(el => {
            const name = el.name;
            const id = el.id;
            const done = el.done
            const li = this.createItem({ name, id, done })
            obj.append(li.item)
        });
    }

    createForm() {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const button = document.createElement('button');

        form.classList.add('flex', 'w-full', 'mb-5');
        input.classList.add('w-10/12', 'p-2.5', 'rounded-s-md', 'bg-[color:hsl(201,_65%,_32%,_10%)]', 'placeholder-[#EBF0F2]', 'outline-none');
        button.classList.add('bg-[#2EA7E7]', 'w-2/12', 'p-2.5', 'rounded-e-md', 'hover:bg-[color:hsl(201,_79%,_54%,_80%)]', 'transition-all', 'ease-in-out', 'delay-30');


        input.placeholder = "Введите название нового дела";
        button.textContent = 'Добавить';

        button.disabled = true;
        input.addEventListener("keyup", function () {
            button.disabled = false;
            if (!input.value) {
                button.disabled = true;
            }
        });

        form.append(input, button);

        return { form, input, button }
    }

    createUl() {
        const ul = document.createElement('ul');
        ul.classList.add('flex', 'flex-wrap', 'flex-col', 'rounded-lg', 'bg-[color:hsl(201,_65%,_32%,_10%)]', 'gap-1.5', 'overflow-hidden');
        return ul;
    }
    
    createItem({ name, id, done }) {
        id = id ? id : this.arrName[this.arrName.length - 1]?.id ? this.arrName[this.arrName.length - 1].id + 1 : 1;
        done = done ? done : false;
        const item = document.createElement('li');
        const buttonGroup = document.createElement("div");
        const doneButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        item.textContent = name;
        doneButton.textContent = "Готово";
        deleteButton.textContent = "Удалить";

        item.classList.add('flex', 'justify-between', 'p-2.5', 'items-center', 'bg-[color:hsl(201,_65%,_32%,_5%)]', 'bg-gradient-to-r');
        buttonGroup.classList.add('flex', 'w-52');
        doneButton.classList.add('bg-[#98C4DC]', 'p-2.5', 'rounded-s-md', 'basis-6/12', 'hover:bg-[#1D6287]', 'transition-all', 'ease-in-out', 'delay-30');
        deleteButton.classList.add('p-2.5', 'rounded-e-md', 'bg-red-500', 'basis-6/12', 'hover:bg-red-700', 'transition-all', 'ease-in-out', 'delay-30');
        
        doneButton.addEventListener("click", () => {
            item.classList.toggle('from-[#297C68]');
            done = !done;
            this.handleSetLocalStorage({ name, id, done })
        });
          deleteButton.addEventListener("click", () => {
            if (confirm("Вы уверены?")) {
                this.handleDeleteLocalStorage(id);
                item.remove();
            }
        });

        buttonGroup.append(doneButton, deleteButton);
        item.append(buttonGroup);

        this.handleSetLocalStorage({ name, id, done })

        if(done) {
            item.classList.toggle('from-[#297C68]');
        }

        return { item, id, done };
    }

    render() {
        const title = document.createElement('h2');
        title.classList.add('mb-5', 'font-bold', 'text-4xl')
        title.innerText = this.name;

        const form = this.createForm();
        const ul = this.createUl();


        form.form.addEventListener('submit', (e) => {
            e.preventDefault();
            const value = form.input.value
            const item = this.createItem({ name: value });
            ul.append(item.item);
            form.input.value = '';
            form.button.disabled = true;
            form.button.blur()
        })

        this.handleGetLocalStorage(ul)
        this.page.append(title, form.form, ul);
    }
}



// document.addEventListener('DOMContentLoaded', function() {
    const listPage = new List()
    switch (document.title) {
        case 'My':
            listPage.name = document.title;
            listPage.page = ROOT_LIST
            listPage.arrName = myStorage;
            listPage.render();
            break;
        case 'Shopping':
            listPage.name = document.title;
            listPage.page = ROOT_LIST;
            listPage.arrName = shoppingStorage;
            listPage.render();
            break;
    
        default:
            break;
    }
// })