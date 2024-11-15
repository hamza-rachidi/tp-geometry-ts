import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor{ 
    private buffer: string = 'None';


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