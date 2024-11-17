import AbstractGeometry from "./AbstractGeometry";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";


export default class GeometryCollection extends AbstractGeometry {
    private geometries: Array<Geometry>;
  
    constructor(geometries?: Array<Geometry>) {
      super();
      this.geometries = geometries || [];
    }
    
    getType(): string {
        return "GeometryCollection";
    }
    isEmpty(): boolean {
        return this.geometries.length==0 ;
    }
    translate(dx: number, dy: number): void {
        for ( let geometry of this.geometries ){
            geometry.translate(dx,dy);
          }
    }
    clone(): Geometry {
        const newGeometries = [];
        const mygeometries = [...this.geometries];
        for ( const geometry of mygeometries){
        
            newGeometries.push(geometry.clone());
        }
        return new GeometryCollection(newGeometries);

    }
    accept(visitor: GeometryVisitor): void {
        visitor.visitGeometryCollection(this);
    }

    getNumGeometries(): number {
        return this.geometries.length ;
    }

    getGeometryN(n:number): Geometry {
        return this.geometries[n] ;
    }
    
    
  }
  