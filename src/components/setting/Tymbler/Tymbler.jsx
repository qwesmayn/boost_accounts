import style from "./Tymbler.module.scss";

export default function Tymbler(props) {

  return (
    <div className={style.setting_button}>
    <div>
      <label className={style.switch} htmlFor={props.id}>
        <input
          id={props.id}
          type="checkbox"
          readOnly
        />
        <span className={style.slider} />
        <span className={style.wave} />
      </label>
    </div>
    <div>
      <span>{props.text}</span>
    </div>
  </div>
  );
}
