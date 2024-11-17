import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";
import NonvalidGeometry from "../src/NonvalidGeometry";
import GeometryCollection from "../src/GeometryCollection";


describe("test de conversion d'une géométrie au format WKT", () => {

    it("test sur point empty et point non empty", () => {
        const p1 = new Point();
        const p2 = new Point([0.0,1.0]);
        const writer = new WktWriter();

        // "POINT(3.0 4.0)"
        const wkt1 = writer.write(p1);
        expect(wkt1).to.equal("POINT EMPTY");
        const wkt2 = writer.write(p2);
        expect(wkt2).to.equal("POINT(0 1)");
        
        
    });

    it("test sur lineString empty et non empty", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l1 = new LineString([p1,p2]);
        const l2 = new LineString([]);
        const writer = new WktWriter();
        const wkt1 = writer.write(l1);
        expect(wkt1).to.equal("LINESTRING(3 4,2 3)");
        const wkt2 = writer.write(l2);
        expect(wkt2).to.equal("LINESTRING EMPTY");
        
    });

    it("test sur collection de géometries empty et non empty", () => {

        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        const c1 = new GeometryCollection([p1,l]);
        const c2 = new GeometryCollection([]);
        const writer = new WktWriter();
        const wkt1 = writer.write(c1);
        expect(wkt1).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 3))");
        const wkt2 = writer.write(c2);
        expect(wkt2).to.equal("GEOMETRYCOLLECTION EMPTY");
        
    });


    it("test sur cette classe", () => {
        
        const x = new NonvalidGeometry();
        const writer = new WktWriter();
        expect(()=> {writer.write(x)}).to.throw(TypeError,"geometry type not supported");
        
    });

    
});

