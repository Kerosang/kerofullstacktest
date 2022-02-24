
import './App.css';

function PanelButton() {
    const shoot = () => {
        // alert("Great Shot!");
        let a = document.getElementById("bt1");
        if (a.innerHTML !== "Kerosang") {
            a.innerHTML = "Kerosang";
            console.log('KERO');
        }
        else {
            a.innerHTML = "Bt1"
        }
    }
    let s = <div className="App"><button onClick={shoot} className="App" ><p id="bt1"> Bt1 </p></button></div>
    return (s);
}
export default PanelButton;
