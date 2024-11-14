import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {

    it("test default constructor", () => {
        const l = new LineString([]);
        expect(l.getNumPoints()).to.equal(0);
        expect(l.isEmpty()).to.equal(true);
    });

    it("test constructor with points", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.isEmpty()).to.equal(false);
        expect(l.getType()).to.equal("LineString");
        expect(l.getPointN(1)).to.equal(p2);
    });

    it("test translate lineString", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        l.translate(1.0,2.0);
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([4.0,6.0]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([3.0,5.0]);
    });

    
    it("test clone linestring", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        const copy = l.clone();
        copy.translate(1.0,1.0);
        expect(l.getPointN(0).getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(l.getPointN(1).getCoordinate()).to.deep.equal([2.0,3.0]);
    });
});

