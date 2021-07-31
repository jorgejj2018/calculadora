
function App(){

    const [expression, setExpression] = React.useState("");
    const [anwser , setAnswer] = React.useState(0)

    const display = (symbol) =>{
        setExpression(prev => prev + symbol);
        if(expression[expression.length - 1] == "="){
            if(/[1-9]/.test(symbol)){
                setExpression(symbol);
            }else{
                setExpression(answer + symbol);
            }
        }
    }

    const calculate = () =>{
        setAnswer(eval(expression))
        setExpression((prev) => prev + "=");
    }

    const allClear = () =>{
        setExpression("")
        setAnswer(0)
    }

    const clear = () =>{
        setExpression((prev) =>
            prev.split("").slice(0,prev.length - 1).join("")
        );
        setAnswer(0)

    }


    return(
        <div className="container">
            <div className="grid">
            <div className="dis">
                <input type="text" value={expression} placeholder="0" disabled />
                <div className="total" id="display">{anwser}</div>
            </div>
                <div onClick={allClear} className="teclas AC tomato" id="AC">AC</div>
                <div onClick={clear} className="teclas C tomato"id="clear">C</div>
                <div onClick={() => display("/")} className="teclas div" id="divide">/</div>
                <div onClick={() => display("*")} className="teclas times" id="multiply">X</div>
                <div onClick={() => display("7")} className="teclas seven dark" id="seven">7</div>
                <div onClick={() => display("8")} className="teclas eight dark" id="eight">8</div>
                <div onClick={() => display("9")} className="teclas nine dark" id="nine">9</div>
                <div onClick={() => display("-")} className="teclas minus" id="subtract">-</div>
                <div onClick={() => display("4")} className="teclas four dark" id="four">4</div>
                <div onClick={() => display("5")} className="teclas five dark" id="five">5</div>
                <div onClick={() => display("6")}  className="teclas six dark" id="six">6</div>
                <div onClick={() => display("+")} className="teclas plus" id="add">+</div>
                <div onClick={() => display("1")} className="teclas one dark" id="one">1</div>
                <div onClick={() => display("2")} className="teclas two dark" id="two">2</div>
                <div onClick={() => display("3")} className="teclas three dark" id="three">3</div>
                <div onClick={calculate} className="teclas equal blue" id="equals">=</div>
                <div onClick={() => display("0")} className="teclas zero dark" id="zero">0</div>
                <div onClick={() => display(".")} className="teclas dot dark" id="decimal">.</div>
            </div>
        </div>
    );
}
ReactDOM.render(<App/>,document.getElementById("root"));