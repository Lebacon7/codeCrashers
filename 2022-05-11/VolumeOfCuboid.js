/*
Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
*/
class Kata{
    static getVolumeOfCuboid(l,w,h){
        return l*w*h
    }
}
console.log(Kata.getVolumeOfCuboid(6.3,2,5))