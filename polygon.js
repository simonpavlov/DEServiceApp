fs = require('fs');
module.exports = {
    createPolygon() {
        points = [];

        this.pushPoint = function(point) { return points.push(point); }
        this.takePoint = function(id) { return points[id]; }
        this.changePoint = function(id, point) { return points[id] = point; }
        this.clear = function() { return points = []; }
        this.writeToFile = function(fileName) {
            fs.writeFileSync(fileName, JSON.stringify(points));
            this.clear();
        }
        this.loadFromFile = function(fileName) {
            points = JSON.parse(fs.readFileSync(fileName));
        }
        return this;
    }
}
