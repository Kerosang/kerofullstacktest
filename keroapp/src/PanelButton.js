
import './App.css';
class button {
    constructor(id) {
        this.id = id;
        this.state = "0";
    }
    pushBt() {
        if (this.state === "0") {
            this.openBt();
            this.state = "1";
        }
        if (this.state === "1") {
            this.closeBt();
            this.state = "0";
        }
    }
    render() {
        return <div className="App"><button onClick={this.pushBt} className="bt-close" ><p id="bt1"> ON </p></button> <script>
            
            </script></div>
    }
    openBt() {
        let a = document.getElementById(this.id);
        a.className = "bt-open";
        a.innerHTML = "ON";
        this.state = 1;

    }
    closeBt() {
        let a = document.getElementById(this.id);
        a.className = "bt-close";
        a.innerHTML = "OFF";
        this.state = 0;
    }
}
function PanelButton() {
    var bt1 = new button("bt1");
    var bt2 = new button("bt2");
    return (<html> {bt1.render()} + {bt2.render()} </html>);
}
export default PanelButton;
