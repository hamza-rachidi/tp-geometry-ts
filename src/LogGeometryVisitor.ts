import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";


export default class LogGeometryVisitor implements GeometryVisitor{
    constructor(private log = console.log){

    }
   
    visitPoint(geom: Point) {
        if (geom.isEmpty()){
            this.log("Je suis un point vide.");
        }
        else{
            this.log('Je suis un point avec x='+geom.x()+ ' et y=' +geom.y()+'.');
        }
    }

    visitLineString(linestr: LineString) {
        if (linestr.isEmpty()){
            this.log("Je suis une polyligne vide.");
        }

        else{
                this.log("Je suis une polyligne définie par " + linestr.getNumPoints()+ " point(s).");
            }
        }
    }
