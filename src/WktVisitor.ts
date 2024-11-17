import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";

export default class WktVisitor implements GeometryVisitor{
    private buffer: string = '';


      visitPoint(geom: Point): void {
        let valeur = "";
        if (geom.isEmpty()){
            valeur = "POINT EMPTY";
        }
        else{
            valeur = 'POINT(' + geom.x() +' ' + geom.y()+')';
        }
        this.buffer = valeur;
    }
    

    visitLineString(linestr: LineString) :void {
        let valeur = "";
        if (linestr.isEmpty()){
            valeur = "LINESTRING EMPTY";
        }
        else{
            let texte:string = 'LINESTRING(';
            for ( let i=0;i<linestr.getNumPoints();i++){
              texte += linestr.getPointN(i).x();
              texte += ' ';
              texte += linestr.getPointN(i).y();
              if (i==linestr.getNumPoints()-1){
                break;
            }
              texte += ',';
            }
            valeur = texte+")";
            }
        this.buffer = valeur;
        } 

    visitGeometryCollection(collection: GeometryCollection): void {
        let valeur = "";
        if (collection.isEmpty()){
            valeur = "GEOMETRYCOLLECTION EMPTY";
        }
        else{
            let texte:string = 'GEOMETRYCOLLECTION(';
            for ( let i=0;i<collection.getNumGeometries();i++){

                collection.getGeometryN(i).accept(this);
                texte += this.buffer;
                if (i==collection.getNumGeometries()-1){
                    break;
                }
                texte += ',';
                 
            }
            valeur = texte+")";
        }
        this.buffer = valeur;
        
    } 
        
     
    getResult() : string{
        return this.buffer;
    }
}