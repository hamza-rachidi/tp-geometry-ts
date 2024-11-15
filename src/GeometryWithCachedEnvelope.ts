import GeometryVisitor from "./GeometryVisitor";
import Envelope from "./Envelope";
import Geometry from "./Geometry";

export default class GeometryWithenveloppe_cachedEnvelope implements Geometry{
    
        private enveloppe_cache?: Envelope;
        private originale?: Geometry;
        
        constructor(originale: Geometry) {
            this.originale = originale;
            this.enveloppe_cache = null; // vider le cache à chaque instanciation
        }
        getEnvelope(): Envelope {
            if (this.enveloppe_cache === null) {
                this.enveloppe_cache = this.originale.getEnvelope();  
            }


            return this.enveloppe_cache;
        }
        getType(): string {
            return this.originale.getType();
        }

        asText(): string {
            return this.originale.asText();
        }
    

        isEmpty(): boolean {
            return this.originale.isEmpty();
        }
    
        translate(dx: number, dy: number): void {
            this.originale.translate(dx,dy);
            this.enveloppe_cache = null;
        }
       
        clone(): Geometry {
            return this.originale.clone();
        }
    
        accept(visitor: GeometryVisitor): void {
            this.originale.accept(visitor);
        }
       
    }