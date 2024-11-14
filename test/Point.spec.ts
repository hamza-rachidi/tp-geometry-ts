import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {

    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.isEmpty()).to.equal(false);
        expect(p.getType()).to.equal("Point");
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });

    it("test translate point", () => {
        const p = new Point([0.0,0.0]);
        p.translate(1.0,2.0);
        expect(p.x()).to.equal(1.0);
        expect(p.y()).to.equal(2.0);
    });

    it("test clone point", () => {
        const p1 = new Point([0.0,0.0]);
        const copy = p1.clone();
        copy.translate(1.0,1.0);
        expect(p1.x()).to.equal(0.0);  // and not 1.0
        expect(p1.y()).to.equal(0.0); // and not 1.0
    });
});

