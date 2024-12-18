import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";
import GeometryCollection from "./GeometryCollection";


export default class LogGeometryVisitor implements GeometryVisitor{
    constructor(private log = console.log){

    }
    
   
    visitPoint(geom: Point):void  {
        if (geom.isEmpty()){
            this.log("Je suis un point vide.");
        }
        else{
            this.log('Je suis un point avec x='+geom.x()+ ' et y=' +geom.y()+'.');
        }
    }

    visitLineString(linestr: LineString):void  {
        if (linestr.isEmpty()){
            this.log("Je suis une polyligne vide.");
        }

        else{
                this.log("Je suis une polyligne définie par " + linestr.getNumPoints()+ " point(s).");
            }
        }

    visitGeometryCollection(collection: GeometryCollection): void {
        if (collection.isEmpty()){
            this.log("Je suis une collection de géometries vide.");
        }

        else{
            
            this.log("Je suis une collection définie par " + collection.getNumGeometries()+ " géometries(s).");
        }
        }
    }

    

    