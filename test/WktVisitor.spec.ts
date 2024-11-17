import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";
import GeometryCollection from "../src/GeometryCollection";


describe("test du visiteur", () => {

    it("test sur point empty ", () => {
        
        const visitor = new WktVisitor();
        const p1 = new Point();
        p1.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT EMPTY");

    });

    it("test sur point non empty", () => {
        
        const visitor = new WktVisitor();
        const p2 = new Point([0.0,1.0]);
        p2.accept(visitor); 
        const wkt = visitor.getResult();
        expect(wkt).to.equal("POINT(0 1)");
        
    });

    it("test sur lineString empty", () => {

        const visitor = new WktVisitor();
        const l = new LineString([]);
        l.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING EMPTY");
        
    }); 

    it("test sur lineString non empty", () => {

        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        l.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("LINESTRING(3 4,2 3)");
        
    }); 

    it("test sur collection de géometries empty", () => {

        const l = new GeometryCollection([]);
        const visitor = new WktVisitor();
        l.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("GEOMETRYCOLLECTION EMPTY");
        
    }); 

    it("test sur collection de géometries non empty", () => {

        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        const c = new GeometryCollection([p1,l]);
        c.accept(visitor);
        const wkt = visitor.getResult();
        expect(wkt).to.equal("GEOMETRYCOLLECTION(POINT(3 4),LINESTRING(3 4,2 3))");
        
    }); 

});


