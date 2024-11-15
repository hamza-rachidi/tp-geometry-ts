import "mocha";
import { expect } from "chai";
import WktVisitor from "../src/WktVisitor";

import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import Geometry from "../src/Geometry";

import Point from "../src/Point";


describe("testeur de la classe GeometryWithCachedEnvelope", () => {

    it("tester la fonctions get enveloppe et autres tests", () => {
        let geom: Geometry = new Point([3.0,3.0]);
        geom = new GeometryWithCachedEnvelope(geom);
        const a = geom.getEnvelope();
        const b = geom.getEnvelope();
        
        expect(a).to.equal(b);
        expect(geom.getType()).to.equal("Point");
        expect(geom.isEmpty()).to.be.false;
        //expect(geom.clone()).to.deep.equal(geom.clone());
        expect(geom.asText()).to.deep.equal("POINT(3 3)");
        
    });

    
});