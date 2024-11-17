import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor{
    private Xmin: number;
    private Ymin: number;
    private Xmax: number;
    private Ymax: number;
    

    constructor() {
      this.Xmin = Number.NaN;
      this.Ymin = Number.NaN;
      this.Xmax = Number.NaN;
      this.Ymax = Number.NaN;
  }
    
    visitPoint(point: Point): void {
        if (!point.isEmpty()) {
            this.insert(point.getCoordinate());
        }
        
    }
    visitLineString(linestring: LineString): void {
        if (!linestring.isEmpty()) {
            for (let i = 0; i< linestring.getNumPoints(); i++) {
                this.insert(linestring.getPointN(i).getCoordinate());  
            }
        }
    }


    visitGeometryCollection(collection: GeometryCollection): void {
        if (!collection.isEmpty()) {
            for (let i = 0; i< collection.getNumGeometries(); i++) {
                collection.getGeometryN(i).accept(this);
                  
            }
        }
    }

    insert(coordinate: Coordinate) : void{
        const x = coordinate[0];
        const y = coordinate[1];
        this.Xmin = Number.isNaN(this.Xmin) ? x : (x < this.Xmin ? x : this.Xmin);
        this.Xmax = Number.isNaN(this.Xmax) ? x : (x > this.Xmax ? x : this.Xmax);
        this.Ymin = Number.isNaN(this.Ymin) ? y : (y < this.Ymin ? y : this.Ymin);
        this.Ymax = Number.isNaN(this.Ymax) ? y : (y > this.Ymax ? y : this.Ymax);
        
    }

    build(): Envelope {
        
        return new Envelope([this.Xmin, this.Ymin], [this.Xmax, this.Ymax]);

    }
}


