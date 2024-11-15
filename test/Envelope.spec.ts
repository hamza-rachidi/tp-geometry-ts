import "mocha";
import { expect } from "chai";
import Coordinate from "../src/Coordinate";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {

    it("test Default Constructor", () => {
        /*let bottom_left:Coordinate = [];
        let top_right:Coordinate = [];*/
        const env = new Envelope();
        expect(env.getXmin()).to.deep.equal(NaN);
        expect(env.getYmin()).to.deep.equal(NaN);
        expect(env.getXmax()).to.deep.equal(NaN);
        expect(env.getYmax()).to.deep.equal(NaN);
        expect(env.isEmpty()).to.equal(true);
        expect(env.toString()).to.equal("Enveloppe vide");
        
    });

    it("test Envelope with two coordinates", () => {
        let bottom_left:Coordinate = [0.0,0.0];
        let top_right:Coordinate = [1.0,2.0];
        const env = new Envelope(bottom_left,top_right);
        expect(env.getXmin()).to.equal(0.0);
        expect(env.getYmin()).to.equal(0.0);
        expect(env.getXmax()).to.equal(1.0);
        expect(env.getYmax()).to.equal(2.0);
        expect(env.isEmpty()).to.equal(false);
        expect(env.toString()).to.equal("0,0,1,2");
    });

    
    
});

