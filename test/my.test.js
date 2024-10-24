import {describe,it} from "node:test"
import assert from "node:assert"
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
    assert.equal(2+2,4)
  })
  it("lerp", () => {
    assert.equal(lerp(2,4,0.5), 2)
  })
})
