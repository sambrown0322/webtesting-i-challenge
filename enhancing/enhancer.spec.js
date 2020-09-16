const enhancer = require("./enhancer.js");
// test away!

const longSword = {
  name: "Long sword",
  durability: 80,
  enhancement: 15,
};

const staff = {
  name: "Staff",
  durability: 60,
  enhancement: 20,
};

const dagger = {
  name: "Dagger",
  durability: 90,
  enhancement: 10,
};
describe("enhancer.js", () => {
  it("repairs an item, restoring the durability to 100", () => {
    const repairedItem = enhancer.repair(longSword);

    expect(repairedItem.durability).toEqual(100);
  });
  describe("successes", () => {
    it(" increases enhancement by 1 if it starts less than 20", () => {
      const enhancedItem = enhancer.success(longSword);

      expect(enhancedItem.enhancement).toEqual(longSword.enhancement + 1);
    });
    it("doesn't change the level if it's already at 20", () => {
      const returnedItem = enhancer.success(staff);

      expect(returnedItem.enhancement).toEqual(staff.enhancement);
    });
  });
  describe("fails", () => {
    it("decreases durability by 5 if enhancement is less than 15", () => {
      const failedItem = enhancer.fail(dagger);

      expect(failedItem.durability).toEqual(dagger.durability - 5);
    });
    it("decreases durability by 10 if the enhancement is 15", () => {
      const failedItem = enhancer.fail(longSword);

      expect(failedItem.durability).toEqual(longSword.durability - 10);
    });
    it("decreases durability by 10 and enhancement by 1 if the enhancement greater than 16", () => {
      const failedItem = enhancer.fail(staff);

      expect(failedItem.durability).toEqual(staff.durability - 10);
      expect(failedItem.enhancement).toEqual(staff.enhancement - 1);
    });
  });
});
