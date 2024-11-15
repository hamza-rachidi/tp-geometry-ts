import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";


export default class WktWriter {

  write(geometry:Geometry):string{
  
  if ( geometry instanceof Point ){
    if ( geometry.isEmpty() ){
    return "POINT EMPTY";} else{
    return 'POINT(' + geometry.x() +' ' + geometry.y()+')';
    }
    

  }else if ( geometry instanceof LineString )
    {
    //LINESTRING(3 4,10 50,20 25)
    if ( geometry.isEmpty() ){
      return "LINESTRING EMPTY";} else{

        let texte:string = 'LINESTRING(';
        for ( let i=0;i<geometry.getNumPoints();i++){
          texte += geometry.getPointN(i).x();
          texte += ' ';
          texte += geometry.getPointN(i).y();
          texte += ',';
        }
        return texte+")";

      }
    
  }else{
      throw new TypeError("geometry type not supported");
  }
  
  }
}
