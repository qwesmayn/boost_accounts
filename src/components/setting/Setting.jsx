import { useState } from "react";
import style from "./Setting.module.scss";
import Choose_game from "./Choose_game/Choose_game";
import Tymbler from "./Tymbler/Tymbler";


export default function Setting(props) {
  // const [isActive, setIsActive] = useState(false);
  // const [selected, setIsSelected] = useState("Выберите игры для буста");
  const [isActive, setIsActive] = useState(false);
  const [selectedGames, setSelectedGames] = useState([]);

  const handleGameSelection = (game, isSelected) => {
    if (isSelected) {
      setSelectedGames([...selectedGames, game]);
    } else {
      setSelectedGames(selectedGames.filter(g => g !== game));
    }
  };
  return (
    <div className={style.main_setting}
    >
      <div className={style.game}>
        <span>Игры</span>
      </div>
      <div>
        <div className={style.dropdown}>
          <div
            onClick={(e) => {
              setIsActive(!isActive); 
            }}
            className={style.dropdown_btn}
            style={{
              background: isActive ? "#1E1E1E" : "#464646",
              color: isActive ? "#A5A5A5" : "#FFF",
            }}
          >
            {selectedGames.join(', ')}
            <span
              className={
                isActive ? style.fasfa_caret_up : style.fasfa_caret_down
              }
            />
            <svg style={{ display: isActive ? "none " : "block" }}
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M15.2617 5.62382C15.0625 5.42464 14.7923 5.31274 14.5106 5.31274C14.2288 5.31274 13.9586 5.42464 13.7594 5.62382L8.5 10.8832L3.24062 5.62382C3.04023 5.43028 2.77184 5.32319 2.49326 5.32561C2.21467 5.32803 1.94819 5.43977 1.75119 5.63676C1.55419 5.83376 1.44245 6.10025 1.44003 6.37883C1.43761 6.65742 1.54471 6.92581 1.73825 7.1262L7.74881 13.1368C7.94806 13.3359 8.21826 13.4478 8.5 13.4478C8.78173 13.4478 9.05194 13.3359 9.25118 13.1368L15.2617 7.1262C15.4609 6.92695 15.5728 6.65675 15.5728 6.37501C15.5728 6.09327 15.4609 5.82307 15.2617 5.62382Z"
                  fill="white"
                />
              </svg>
          </div>
          <div
            className={style.dropdown_content}
            style={{ display: isActive ? "block " : "none" }}
          >
            <Choose_game
              name="Game 1"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
            <Choose_game
              name="Game 2"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
            <Choose_game
              name="Game 3"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 4"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 5"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 6"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 7"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 8"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
             <Choose_game
              name="Game 9"
              isActive={isActive}
              setIsActive={setIsActive}
              handleGameSelection={handleGameSelection}
            />
          </div>
        </div>
        <div className={style.game_list}>
          <span>
            Выбрано: <span>{selectedGames.join(', ')}</span>
          </span>
        </div>
      </div>
      <div className={style.input_shortname}>
        <div>
          <span>Кастомное название (в сторонней игре)</span>
        </div>
        <div>
          <input />
        </div>
      </div>
      <Tymbler id = {props.id} text = {props.text}/>
      <Tymbler id = {props.id1} text = {props.text1}/>
    </div>
  );
}
