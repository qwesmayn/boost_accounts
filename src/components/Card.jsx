import style from "./Card.module.scss";
import profile from "../assets/profile.png";
import Setting from "./setting/Setting";
import { useState } from "react";

// @media (max-width: 1920px) {width: 312px;} адаптация карточки

export default function Card(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.card}
        style={{width: isActive ? "690px" : "538px"}}
    >
      <div className={style.image}
        style={{width: isActive ? "690px" : "538px"}}
      >
        <div className={style.profile}
            style={{marginBottom: isActive ? "4.5em" : "0"}}
        >
          <div className={style.imageProfile}
            style={{marginRight : isActive? "28.1em" : "0"}}
          >
            <img src={profile} width="70px" height="70px"></img>
          </div>
          <div className={style.profileInfo}
            style={{position : isActive ? "absolute" : "static", top : isActive ? "8em" : "0", marginLeft : isActive ? "0" : "12px"}}
          >
            <p>
              Логин: <span className={style.profileName}>alexanderr11</span>
            </p>
            <p>
              Осталось: <span className={style.hourNeed}>100 часов</span>
            </p>
          </div>

          <div className={style.infoButton}>
            <button className={style.buttonOnOff}>Выключен</button>
          </div>
          <div>
            <button className={style.editAccount}
                style={{display : isActive ? "none" : "block"}}
            >Редактировать аккаунт</button>
          </div>
        </div>
        <div
            className={style.setting_show}
            style={{display: isActive ? "block" : "none",}}

        >
            <Setting id = {props.id} id1 = {props.id1} text = {props.text} text1 = {props.text1}/>
        </div>

        <div className={style.buttons}
            style={{gridTemplateColumns : isActive ? " 515px 65px 50px" : " 365px 65px 50px"}}
        >
          <div className={style.key}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 15C7.83333 15 8.54167 14.7083 9.125 14.125C9.70833 13.5417 10 12.8333 10 12C10 11.1667 9.70833 10.4583 9.125 9.875C8.54167 9.29167 7.83333 9 7 9C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15ZM7 18C5.33333 18 3.91667 17.4167 2.75 16.25C1.58333 15.0833 1 13.6667 1 12C1 10.3333 1.58333 8.91667 2.75 7.75C3.91667 6.58333 5.33333 6 7 6C8.35 6 9.52933 6.38333 10.538 7.15C11.5467 7.91667 12.2507 8.86667 12.65 10H21.025L23 11.975L19.5 15.975L17 14L15 16L13 14H12.65C12.2333 15.2 11.5083 16.1667 10.475 16.9C9.44167 17.6333 8.28333 18 7 18Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.play}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
            >
              <path
                d="M18.5 12C18.5006 12.2546 18.4353 12.5051 18.3105 12.7271C18.1856 12.949 18.0055 13.1348 17.7875 13.2665L4.28 21.5297C4.05227 21.6691 3.79144 21.7452 3.52445 21.7502C3.25746 21.7551 2.99399 21.6887 2.76125 21.5578C2.53073 21.4289 2.3387 21.2409 2.2049 21.0132C2.07111 20.7855 2.00039 20.5263 2 20.2622V3.73779C2.00039 3.47368 2.07111 3.21445 2.2049 2.98673C2.3387 2.75902 2.53073 2.57106 2.76125 2.44217C2.99399 2.31124 3.25746 2.24482 3.52445 2.24977C3.79144 2.25471 4.05227 2.33084 4.28 2.47029L17.7875 10.7334C18.0055 10.8651 18.1856 11.051 18.3105 11.2729C18.4353 11.4949 18.5006 11.7453 18.5 12Z"
                fill="#39A37F"
              />
            </svg>
          </div>
          <div
            className={style.settings}
            onClick={(e) => {
              setIsActive(!isActive);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.25 22L8.85 18.8C8.63333 18.7167 8.42933 18.6167 8.238 18.5C8.04666 18.3833 7.859 18.2583 7.675 18.125L4.7 19.375L1.95 14.625L4.525 12.675C4.50833 12.5583 4.5 12.446 4.5 12.338V11.663C4.5 11.5543 4.50833 11.4417 4.525 11.325L1.95 9.375L4.7 4.625L7.675 5.875C7.85833 5.74167 8.05 5.61667 8.25 5.5C8.45 5.38333 8.65 5.28333 8.85 5.2L9.25 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.955 5.61667 16.1423 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5543 19.5 11.663V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.562 9.525C8.88666 10.2083 8.54933 11.0333 8.55 12C8.55 12.9667 8.88766 13.7917 9.563 14.475C10.2383 15.1583 11.0673 15.5 12.05 15.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
