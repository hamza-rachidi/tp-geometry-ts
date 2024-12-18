import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import GeometryCollection from "../src/GeometryCollection";


describe("test visiteur LogGeometryVisitor", () => {

    it("test sur point empty ", () => {
        let result = "";
        const p = new Point();
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        p.accept(visitor);
        
        expect(result).to.equal("Je suis un point vide.");
    });

    it("test sur point non empty ", () => {
        let result = "";
        const p= new Point([3.0,4.0]);
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        p.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3 et y=4.");

    });
    
    it("test sur lineString empty ", () => {
        
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        const l = new LineString([]);
        l.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide.");
    });

    it("test sur lineString non empty ", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        l.accept(visitor);
        expect(result).to.equal("Je suis une polyligne définie par 2 point(s).");
    });

    it("test sur GeometryCollection empty ", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        const l = new GeometryCollection([]);
        l.accept(visitor);
        expect(result).to.equal("Je suis une collection de géometries vide.");
    });
    
    it("test sur GeometryCollection non empty ", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,3.0]);
        const l = new LineString([p1,p2]);
        const c = new GeometryCollection([p1,l]);
        let result = "";
        const visitor = new LogGeometryVisitor((message)=>{
            result=message;
        });
        c.accept(visitor);
        expect(result).to.equal("Je suis une collection définie par 2 géometries(s).");
    });
});

