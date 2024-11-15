import "mocha";
import { expect } from "chai";
import Coordinate from "../src/Coordinate";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test Envelope Builder", () => {


    it("test EnvelopeBuilder class", () => {
        const builder = new EnvelopeBuilder();
        expect(builder.build().toString()).to.equal("Enveloppe vide");
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build().toString();
        expect(result).to.equal("0,0,2,3");
    });

    
    
});

