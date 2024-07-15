import Props from "../components/Props";

function App() {

    const Heading = "Ini Props"
    
    function clicked(){
        return alert("ini Button Props");
    }

    return(
        <div>
            <Props Head={Heading}/>
            <button onClick={() => clicked()}>Button Props</button>
        </div>
    )
}

export default App;