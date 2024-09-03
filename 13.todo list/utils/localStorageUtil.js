class LocalStorageUtil {
    constructor(keyName, arrName) {
        this.keyName = keyName;
        this.arrName = arrName
    }

    getHeaderLocalStorage(key) {
        const listLocalStorage = localStorage.getItem(key);
        if(listLocalStorage !== null) {
            return JSON.parse(listLocalStorage);
        }
        return [];
    }

    getList() {
        const listLocalStorage = localStorage.getItem(this.keyName);
        if(listLocalStorage !== null) {
            return JSON.parse(listLocalStorage);
        }
        return [];
    }

    setList({ name, id, done }) {
        let list = this.getList();
        const index = this.arrName[id - 1];

        if(!index) {
            this.arrName.push({ name, id, done });
        } else {
            this.arrName[id - 1].done = done;
        }

        localStorage.setItem(this.keyName, JSON.stringify(this.arrName));
    }

    removeList(id) {
        for(let i = 0; i < this.arrName.length; i++) {
            if(this.arrName[i].id == id) {
                this.arrName.splice(i, 1);
                localStorage.setItem(this.keyName, JSON.stringify(this.arrName));
            }
        }
    }
}

const localStorageUtil = new LocalStorageUtil();

switch (document.title) {
    case 'My':
        localStorageUtil.keyName = 'My';
        localStorageUtil.arrName = myStorage;
        break;
    case 'Shopping':
        localStorageUtil.keyName = 'Shopping';
        localStorageUtil.arrName = shoppingStorage;
        break;

    default:
        break;
}