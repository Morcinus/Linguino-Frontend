import useKeypress from "react-use-keypress";

export interface IKeyPress {
  onPress: () => void;
  keys: Array<string>;
}

const KeyPress: React.FC<IKeyPress> = ({ keys, onPress }) => {
  useKeypress(keys, (e: Event) => {
    e.preventDefault();
    onPress();
  });

  return <></>;
};

export default KeyPress;
