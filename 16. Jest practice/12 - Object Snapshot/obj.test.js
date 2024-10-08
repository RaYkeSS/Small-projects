import { expect, describe, test } from "@jest/globals";

import usersReducer, { addUser } from "./obj.js";
import { setupStore } from "./store";

describe("usersReducer", () => {
  test("work", () => {
    const store = setupStore();
    store.dispatch(addUser("Kevin"));
    expect(store.getState()).toEqual({
      users: ["Kevin"],
    });
  });
});

// describe("usersReducer", () => {
//   it("should initialize as empty array", () => {
//     expect(store.getState()).toEqual({
//       users: [],
//     });
//   });

//   describe("SAVE_USER action", () => {
//     // arrange
//     const addUserAction = (user) => ({
//       type: "SAVE_USER",
//       user,
//     });

//     it("should append to state array", () => {
//       // act
//       store.dispatch(
//         addUserAction({
//           name: "Kyle Welch",
//           handle: "kwelch",
//         })
//       );

//       // assert
//       expect(store.getState()).toMatchSnapshot();

//       // act
//       store.dispatch(
//         addUserAction({
//           name: "Jane Smith",
//           handle: "jsmith",
//         })
//       );

//       // assert
//       expect(store.getState()).toMatchSnapshot();
//     });

//     it("should update when handle matches", () => {
//       // act
//       store.dispatch(
//         addUserAction({
//           name: "Kyle Welch",
//           handle: "kwelch",
//           role: "Test Driven Developer",
//         })
//       );

//       // assert
//       expect(store.getState()).toMatchSnapshot();
//     });
//   });
// });
