

function Testmovemouse() {

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
        <></>
    )
}
export default Testmovemouse;