import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import NonvalidGeometry from "../src/NonvalidGeometry";
import WktVisitor from "../src/WktVisitor";

describe("Nonsense test juste pour tester autre type de Géométrie dans Wkt", () => {

    it("test classe", () => {
        const x = new NonvalidGeometry();
        expect(x.getType()).to.equal("None");
        expect(x.isEmpty()).to.equal(true);
        expect(x.translate(0,0)).to.equal(undefined);
        expect(x.clone()).to.equal(undefined);
        expect(x.asText()).to.equal("Invalid Geometry");
        expect(x.getEnvelope()).to.equal(undefined);

        const visitor = new WktVisitor();
        x.accept(visitor);
        expect(visitor.getResult()).to.equal(""); 



    });
    
});

