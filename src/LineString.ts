import Geometry from "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";


export default class LineString extends AbstractGeometry{
  private points: Array<Point>;

  constructor(points: Array<Point>) {
    super();
    this.points = points;
  }
  getType(): string {
    return "LineString";
  }
  getNumPoints(): number {
    return this.isEmpty() ? 0 : this.points.length ;
  }

  getPointN(n:number): Point {
    return this.points[n];
  }

  isEmpty(): boolean {
    return this.points.length==0 ;
  }

  translate(dx:number,dy:number):void{
    for ( const point of this.points ){
      point.translate(dx,dy);
    }
  }
  
  clone(): Geometry {
    const newPoints = [];
    const mypoints = [...this.points];
    for ( const point of mypoints){
      
      newPoints.push(point.clone());
    }
    return new LineString(newPoints);
  }


  accept(visitor:GeometryVisitor ):void{
    visitor.visitLineString(this);
  }


}
