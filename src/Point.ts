import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";



export default class Point extends AbstractGeometry {
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate || [];
  }

  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.isEmpty() ? Number.NaN  : this.coordinate[0] ;
  }

  y(): number {
    return this.isEmpty() ? Number.NaN  :  this.coordinate[1];
  }
  

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  translate(dx:number,dy:number):void{
    this.coordinate[0] += dx;   
    this.coordinate[1] += dy;

  }

  clone(): Geometry {
    const newCoordinate = [...this.coordinate];
    return new Point(newCoordinate);
  }

  accept( visitor:GeometryVisitor):void{
    visitor.visitPoint(this);
  }

  
}


  
 

