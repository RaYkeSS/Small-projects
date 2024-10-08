import { addUser } from "./12%20-%20Object%20Snapshot/obj.js";
import { setupStore } from "./12%20-%20Object%20Snapshot/store.js";

const store = setupStore();
store.dispatch(
  addUser({
    name: "Kyle Welch",
    handle: "kwelch",
    role: "Test Driven Developer",
  })
);

store.dispatch(
  addUser({
    name: "Kyle Welch",
    handle: "kwelch",
    role: "sddsd",
  })
);

console.log(store.getState());
