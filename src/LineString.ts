import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
  private points: Array<Point>;

  constructor(points: Array<Point>) {
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

  
}
