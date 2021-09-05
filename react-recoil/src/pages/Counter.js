import { useRecoilState, useRecoilValue } from "recoil";
import { textState, charCountState } from "../store/counter";

function Counter() {
  const [text, setText] = useRecoilState(textState);

  const count = useRecoilValue(charCountState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <p>Echo: {text}</p>
      <p>Character Count: {count}</p>
    </div>
  );
}

export default Counter;
