import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


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
          if (i==geometry.getNumPoints()-1){
            break;
          }
          texte += ',';
        }
        return texte+")";

      }} else if ( geometry instanceof GeometryCollection )
        {
        if ( geometry.isEmpty() ){
          return "GEOMETRYCOLLECTION EMPTY";} else{
    
            let texte:string = 'GEOMETRYCOLLECTION(';
            for ( let i=0;i<geometry.getNumGeometries();i++){
              texte += this.write(geometry.getGeometryN(i));
              if (i==geometry.getNumGeometries()-1){
                break;
            }
              texte += ',' ;
            }
            return texte+")";
    
          }
    
  }else{
      throw new TypeError("geometry type not supported");
  }
  
  }
}
