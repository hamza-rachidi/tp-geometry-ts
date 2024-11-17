import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class NonvalidGeometry implements Geometry{


    getType(): string {
        return "None";
    }
    isEmpty(): boolean {
        return true;
    }
    translate(dx: number, dy: number): void {
        //
    }
    clone(): Geometry {
        return;
    }
    getEnvelope(): Envelope {
        return;
    }
    accept(visitor: GeometryVisitor): void {
        return;
    }
    asText(): string {
        return "Invalid Geometry";
    }
    
    }
