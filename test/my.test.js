import {describe, it,assert,expect } from "vitest"

/**
 * @param {number} a
 * @param {number} b
 * @param {number} t 
 * @returns {number}
*/
function lerp(a,b,t) {
  let step = a + (b - a);
  step *= t;
  return step
}
describe("testme", () => {
  it("add", () => {
     expect(2 + 2).toEqual(4)
  })
  it("lerp", () => {
    assert.equal(lerp(2,4,0.5), 2)
  })
})
