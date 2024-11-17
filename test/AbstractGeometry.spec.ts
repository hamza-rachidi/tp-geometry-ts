import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test de AbstractGeometry", () => {
    

    it("test de la fonction asText", () => {

        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const points = new LineString([p1,p2]);
        const emptypoint = new Point();
        const emptylinestring = new LineString([]);
        
        expect(emptypoint.asText()).to.equal("POINT EMPTY");
        expect(emptylinestring.asText()).to.equal("LINESTRING EMPTY");
        expect(p1.asText()).to.equal("POINT(3 4)");
        expect(points.asText()).to.equal("LINESTRING(3 4,2 3)");
    });
});
