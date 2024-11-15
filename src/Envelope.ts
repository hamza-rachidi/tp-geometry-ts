import Coordinate from "./Coordinate";


export default class Envelope {
  private bottomLeft: Coordinate ;
  private topRight: Coordinate ;

  constructor(bottomLeft?: Coordinate,topRight?: Coordinate ) {
    this.bottomLeft = bottomLeft || [NaN,NaN];
    this.topRight = topRight || [NaN,NaN];
  }


  isEmpty(): boolean {
    return Number.isNaN(this.bottomLeft[0]);
  }

  getXmin(): number {
    
    return this.isEmpty() ?NaN:this.bottomLeft[0];
  }

  getYmin(): number {
    return  this.isEmpty() ? NaN:this.bottomLeft[1];
  }

  getXmax(): number {
    return this.isEmpty() ? NaN:this.topRight[0] ;
  }

  getYmax(): number {
    return this.isEmpty() ? NaN:this.topRight[1] ;
  }

  toString(): string {
    return this.isEmpty() ? "Enveloppe vide":this.getXmin()+','+this.getYmin()+','+this.getXmax()+','+this.getYmax();
  }

}
