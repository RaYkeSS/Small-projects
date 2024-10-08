import { jest, expect, describe, test } from "@jest/globals";

import usersReducer, { addUser } from "./obj.js";
import { setupStore } from "./store.js";

describe("usersReducer", () => {
  test("initial test", () => {
    const store = setupStore();
    store.dispatch(addUser("Kevin"));
    expect(store.getState()).toEqual({
      users: ["Kevin"],
    });
  });

  test("should initialize as empty array", () => {
    const store = setupStore();
    expect(store.getState()).toEqual({
      users: [],
    });
  });
  describe("snapshots matching", () => {
    const store = setupStore();

    test("should append to state array", () => {
      // act
      store.dispatch(
        addUser({
          name: "Kyle Welch",
          handle: "kwelch",
        })
      );

      // assert
      expect(store.getState()).toMatchSnapshot();

      // act
      store.dispatch(
        addUser({
          name: "Jane Smith",
          handle: "jsmith",
        })
      );

      // assert
      expect(store.getState()).toMatchSnapshot();
    });

    test("should update when handle matches", () => {
      // act
      store.dispatch(
        addUser({
          name: "Kyle Welch",
          handle: "kwelch",
          role: "Test Driven Developer",
        })
      );

      // assert
      expect(store.getState()).toMatchSnapshot();
    });
  });
});
