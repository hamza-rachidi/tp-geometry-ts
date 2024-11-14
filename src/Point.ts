import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry{
  private coordinate: Coordinate;

  constructor(coordinate?: Coordinate) {
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
    this.coordinate[0] += dx;   // this.x()+= dx
    this.coordinate[1] += dy;

  }

  
}
