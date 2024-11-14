import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        //const pv = new Point();
        expect(l.getNumPoints()).to.equal(0);
        //expect(l.getPointN(0)).to.equal(pv);
    });
    it("test constructor with points", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        expect(l.getType()).to.equal("LineString");
        expect(l.getNumPoints()).to.deep.equal(2);
        expect(l.getPointN(0)).to.equal(p1);
    });
});

