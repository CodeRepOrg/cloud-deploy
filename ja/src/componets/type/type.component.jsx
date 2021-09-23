const Input = (props) => {
    let s;
    const change = (diff) => {
        s = diff.target.value
    }
    return (
        <div className="input-component">
            <input type="text" onChange={(e) => change(e)}></input>
            <button type="submit" onClick={() => props.state(s)}>Hit me!</button>
        </div>
    );
};

export default Input;