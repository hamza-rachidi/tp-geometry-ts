import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";

import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import Geometry from "../src/Geometry";

import Point from "../src/Point";


describe("testeur de la classe GeometryWithCachedEnvelope", () => {

    it("tester la fonctions get enveloppe ", () => {
        let geom: Geometry = new Point([3.0,3.0]);
        geom = new GeometryWithCachedEnvelope(geom);

        // test getEnvelope
        const a = geom.getEnvelope();
        const b = geom.getEnvelope();
        
        expect(a).to.equal(b);
        
    });

    it("test simultané de clonage et translation", () => {
        let geom: Geometry = new Point([3.0,3.0]);
        geom = new GeometryWithCachedEnvelope(geom);
        const copy = geom.clone();
        geom.translate(1.0,1.0);
        expect(copy.asText()).to.equal("POINT(3 3)"); 
        expect(geom.asText()).to.equal("POINT(4 4)"); 
        
    });

    it("test autres fonctions de la classe", () => {
        let geom: Geometry = new Point([3.0,3.0]);
        geom = new GeometryWithCachedEnvelope(geom);
        expect(geom.getType()).to.equal("Point");
        expect(geom.isEmpty()).to.be.false;
        expect(geom.asText()).to.equal("POINT(3 3)"); 
        
    });

    it("test de l'acceptation du visiteur ", () => {
        let geom: Geometry = new Point([3.0,3.0]);
        geom = new GeometryWithCachedEnvelope(geom);
        const visitor = new WktVisitor();
        geom.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3 3)"); 
        
    });

    
});