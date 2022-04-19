

function Testmovemouse() {
var a = "kero";
    function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("demo").innerHTML = coor;
    }

    function clearCoor() {
        document.getElementById("demo").innerHTML = "";
    }

    return (
        <html>{a}</html>
    )
}
export default Testmovemouse;