import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";
  
describe("test Envelope Builder", () => {

    it("test autres fonctions restantes: Clonage, translation ... ", () => {

        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        const c = new GeometryCollection([p1,l]);
        const copy = c.clone();
        copy.translate(1.0,1.0);
        expect(c.asText()).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 3))"); 
        expect(copy.asText()).to.equal("GEOMETRYCOLLECTION(POINT(4 5),LINESTRING(4 5,3 4))");
        expect(c.getType()).to.equal("GeometryCollection");  
    });

});
  
  