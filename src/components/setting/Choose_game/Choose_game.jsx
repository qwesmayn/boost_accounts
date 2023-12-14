import style from "./Choose_game.module.scss";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import { useState } from "react";

export default function Choose_game(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.handleGameSelection(props.name, !isChecked);
  };

  return (
    <div
   onClick={(e) => {
        props.setIsActive(!props.isActive);
    }}
    
    className={style.item}
  >
    {/* {props.name} */}
    <Checkbox
        label= {props.name}
        icon={
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "#39A37F",
              alignSelf: "stretch",
              borderRadius: "10px"
            }}
          >
            <Icon.FiCheck color="black" size={20} />
          </div>
        }
        name="my-input"
        checked={false}
        onChange={handleCheckboxChange}
        borderColor="#39A37F"
        borderRadius={10}
        style={{ cursor: "pointer"}}
      />
  </div>
  );
}
