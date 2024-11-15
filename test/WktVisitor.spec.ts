import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";


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
        
    }); 

    it("test sur lineString non empty", () => {

        const visitor = new WktVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        l.accept(visitor);
        const wkt = visitor.getResult();
        
    }); 

});


