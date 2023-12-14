import style from "./Panel.module.scss";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
import Card from "../Card";
import New_account from "./new_account/New_account";

export default function Panel() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.panel}>
      <div className={style.sidebar}>
        <div className={style.logotype}>
          <div className={style.logo}>
            <div className={style.img_logo}>
              <div></div>
            </div>
          </div>
          <div className={style.logo_name}>
            <span>HOURBOOST.RU</span>
          </div>
        </div>
        <div className={style.setting}>
          <div className={style.setting_help}>
            <span className={style.name_set}>Основные</span>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#383838" />
              <path
                d="M34.408 21.498C34.0087 21.1777 33.512 21.0031 33 21.0031C32.488 21.0031 31.9913 21.1777 31.592 21.498L23.842 27.715C23.5792 27.9259 23.3671 28.193 23.2214 28.4968C23.0757 28.8005 23 29.1331 23 29.47V40.75C23 41.3468 23.2371 41.9191 23.659 42.341C24.081 42.763 24.6533 43 25.25 43H27.75C28.3467 43 28.919 42.763 29.341 42.341C29.7629 41.9191 30 41.3468 30 40.75V35.25C30 34.56 30.56 34 31.25 34H34.75C35.44 34 36 34.56 36 35.25V40.75C36 41.3468 36.2371 41.9191 36.659 42.341C37.081 42.763 37.6533 43 38.25 43H40.75C41.3467 43 41.919 42.763 42.341 42.341C42.7629 41.9191 43 41.3468 43 40.75V29.47C43 29.1331 42.9243 28.8005 42.7786 28.4968C42.6329 28.193 42.4208 27.9259 42.158 27.715L34.408 21.498Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="64.0152" rx="20" fill="#383838" />
              <path
                d="M28.625 42.5C29.5915 42.5 30.375 41.7165 30.375 40.75C30.375 39.7835 29.5915 39 28.625 39C27.6585 39 26.875 39.7835 26.875 40.75C26.875 41.7165 27.6585 42.5 28.625 42.5Z"
                fill="white"
              />
              <path
                d="M40.875 42.5C41.8415 42.5 42.625 41.7165 42.625 40.75C42.625 39.7835 41.8415 39 40.875 39C39.9085 39 39.125 39.7835 39.125 40.75C39.125 41.7165 39.9085 42.5 40.875 42.5Z"
                fill="white"
              />
              <path
                d="M43.9813 24.6052C43.8583 24.4548 43.7035 24.3337 43.5279 24.2506C43.3523 24.1676 43.1605 24.1247 42.9663 24.125H26.3221L25.9869 22.223C25.9511 22.0204 25.8451 21.8368 25.6875 21.7046C25.5299 21.5724 25.3307 21.5 25.125 21.5H21.625C21.3929 21.5 21.1704 21.5922 21.0063 21.7563C20.8422 21.9204 20.75 22.1429 20.75 22.375C20.75 22.6071 20.8422 22.8296 21.0063 22.9937C21.1704 23.1578 21.3929 23.25 21.625 23.25H24.3911L26.8881 37.402C26.9239 37.6046 27.0299 37.7882 27.1875 37.9204C27.3451 38.0526 27.5443 38.125 27.75 38.125H41.75C41.9821 38.125 42.2046 38.0328 42.3687 37.8687C42.5328 37.7046 42.625 37.4821 42.625 37.25C42.625 37.0179 42.5328 36.7954 42.3687 36.6313C42.2046 36.4672 41.9821 36.375 41.75 36.375H28.4839L28.1755 34.625H41.3913C41.6947 34.6246 41.9887 34.5194 42.2235 34.3272C42.4583 34.1349 42.6194 33.8675 42.6797 33.5701L44.2547 25.6951C44.2926 25.5045 44.2878 25.3079 44.2405 25.1194C44.1932 24.9309 44.1047 24.7553 43.9813 24.6052Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#383838" />
              <g clip-path="url(#clip0_117_204)">
                <path
                  d="M33 19C31.3 19 30 20.3 30 22V28C30 29.7 31.3 31 33 31H39L43 35V31C44.7 31 46 29.7 46 28V22C46 20.3 44.7 19 43 19H33ZM37.188 22H38.906L40.594 28H39.094L38.687 26.5H37.187L36.813 28H35.5L37.188 22ZM38 23C37.9 23.4 37.788 23.888 37.687 24.188L37.407 25.5H38.594L38.312 24.187C38.113 23.888 38 23.4 38 23ZM23 29C21.3 29 20 30.3 20 32V38C20 39.7 21.3 41 23 41V45L27 41H33C34.7 41 36 39.7 36 38V32H33C31.1 32 29.594 30.7 29.094 29H23ZM27.594 31.906C29.294 31.906 30.094 33.306 30.094 34.906C30.094 36.306 29.613 37.194 28.813 37.594C29.213 37.794 29.687 37.9 30.187 38L29.813 39C29.113 38.8 28.387 38.488 27.687 38.187C27.587 38.087 27.412 38.094 27.312 38.094C26.112 37.994 25 37 25 35C25 33.3 25.994 31.906 27.594 31.906ZM27.594 33C26.794 33 26.406 33.9 26.406 35C26.406 36.2 26.794 37 27.594 37C28.394 37 28.812 36.1 28.812 35C28.812 33.9 28.394 33 27.594 33Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_204">
                  <rect
                    width="26"
                    height="26"
                    fill="white"
                    transform="translate(20 19)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#383838" />
              <path
                d="M33 20.3333C26.567 20.3333 21.3334 25.567 21.3334 32V36.8335C21.3334 38.0281 22.3799 39 23.6667 39H24.8334C25.1428 39 25.4395 38.8771 25.6583 38.6583C25.8771 38.4395 26 38.1427 26 37.8333V31.8331C26 31.5237 25.8771 31.227 25.6583 31.0082C25.4395 30.7894 25.1428 30.6665 24.8334 30.6665H23.774C24.4227 26.1515 28.3077 22.6666 33 22.6666C37.6924 22.6666 41.5774 26.1515 42.226 30.6665H41.1667C40.8573 30.6665 40.5605 30.7894 40.3417 31.0082C40.123 31.227 40 31.5237 40 31.8331V39C40 40.2868 38.9535 41.3333 37.6667 41.3333H35.3334V40.1666H30.6667V43.6666H37.6667C40.2404 43.6666 42.3334 41.5736 42.3334 39C43.6202 39 44.6667 38.0281 44.6667 36.8335V32C44.6667 25.567 39.433 20.3333 33 20.3333Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#383838" />
              <path
                d="M33 38.1483L37.8416 41.0767C38.7283 41.6133 39.8133 40.82 39.58 39.8167L38.2966 34.31L42.5783 30.6C43.36 29.9233 42.94 28.64 41.9133 28.5583L36.2783 28.08L34.0733 22.8767C33.6766 21.9317 32.3233 21.9317 31.9266 22.8767L29.7216 28.0683L24.0866 28.5467C23.06 28.6283 22.64 29.9117 23.4216 30.5883L27.7033 34.2983L26.42 39.805C26.1866 40.8083 27.2716 41.6017 28.1583 41.065L33 38.1483Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.setting_help}>
            <span className={style.name_set}>Панель</span>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_117_167)">
                <rect
                  x="10"
                  y="10"
                  width="65"
                  height="65"
                  rx="20"
                  fill="#4EE87A"
                  fill-opacity="0.5"
                />
              </g>
              <rect
                x="10"
                y="10"
                width="65"
                height="65"
                rx="20"
                fill="#4EE87A"
              />
              <g clip-path="url(#clip0_117_167)">
                <path
                  d="M48.8334 31.8966C50.593 32.9126 52.0568 34.3706 53.0798 36.1262C54.1028 37.8817 54.6496 39.874 54.666 41.9059C54.6825 43.9377 54.1679 45.9386 53.1734 47.7105C52.1789 49.4823 50.7388 50.9637 48.9958 52.008C47.2528 53.0523 45.2673 53.6233 43.2358 53.6644C41.2043 53.7055 39.1973 53.2153 37.4135 52.2424C35.6297 51.2695 34.1309 49.8476 33.0655 48.1174C32.0001 46.3872 31.405 44.4088 31.3392 42.378L31.3334 42L31.3392 41.622C31.4045 39.6071 31.9908 37.6436 33.041 35.9228C34.0911 34.202 35.5691 32.7827 37.3311 31.8032C39.093 30.8237 41.0787 30.3174 43.0945 30.3338C45.1104 30.3502 47.0876 30.8886 48.8334 31.8966ZM43 35C42.7143 35 42.4385 35.1049 42.2249 35.2948C42.0114 35.4847 41.875 35.7463 41.8415 36.0301L41.8334 36.1666V42L41.8439 42.1528C41.8705 42.3552 41.9497 42.5471 42.0737 42.7093L42.1752 42.826L45.6752 46.326L45.7849 46.4216C45.9895 46.5804 46.2411 46.6665 46.5 46.6665C46.759 46.6665 47.0106 46.5804 47.2152 46.4216L47.3249 46.3248L47.4217 46.2151C47.5805 46.0105 47.6666 45.7589 47.6666 45.5C47.6666 45.241 47.5805 44.9894 47.4217 44.7848L47.3249 44.6751L44.1667 41.5158V36.1666L44.1585 36.0301C44.1251 35.7463 43.9887 35.4847 43.7751 35.2948C43.5616 35.1049 43.2858 35 43 35Z"
                  fill="#1C1C1C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_117_167"
                  x="0"
                  y="0"
                  width="85"
                  height="85"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="5"
                    result="effect1_foregroundBlur_117_167"
                  />
                </filter>
                <clipPath id="clip0_117_167">
                  <rect
                    width="28"
                    height="28"
                    fill="white"
                    transform="translate(29 28)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={style.setting_help}>
            <span className={style.name_set}>Аккаунт</span>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#383838" />
              <path
                d="M41.75 32C41.75 31.7317 41.7383 31.475 41.715 31.2067L43.885 29.5617C44.3516 29.2117 44.48 28.5583 44.1883 28.045L42.0066 24.2767C41.8668 24.0296 41.6405 23.8428 41.3713 23.7524C41.1021 23.662 40.809 23.6742 40.5483 23.7867L38.04 24.8483C37.6083 24.545 37.1533 24.2767 36.675 24.055L36.3366 21.36C36.2666 20.7767 35.765 20.3333 35.1816 20.3333H30.83C30.235 20.3333 29.7333 20.7767 29.6633 21.36L29.325 24.055C28.8466 24.2767 28.3916 24.545 27.96 24.8483L25.4516 23.7867C24.915 23.5533 24.285 23.7633 23.9933 24.2767L21.8116 28.0567C21.52 28.57 21.6483 29.2117 22.115 29.5733L24.285 31.2183C24.2366 31.7422 24.2366 32.2695 24.285 32.7933L22.115 34.4383C21.6483 34.7883 21.52 35.4417 21.8116 35.955L23.9933 39.7233C24.285 40.2367 24.915 40.4467 25.4516 40.2133L27.96 39.1517C28.3916 39.455 28.8466 39.7233 29.325 39.945L29.6633 42.64C29.7333 43.2233 30.235 43.6667 30.8183 43.6667H35.17C35.7533 43.6667 36.255 43.2233 36.325 42.64L36.6633 39.945C37.1416 39.7233 37.5966 39.455 38.0283 39.1517L40.5366 40.2133C41.0733 40.4467 41.7033 40.2367 41.995 39.7233L44.1766 35.955C44.4683 35.4417 44.34 34.8 43.8733 34.4383L41.7033 32.7933C41.7383 32.525 41.75 32.2683 41.75 32ZM33.0466 36.0833C30.795 36.0833 28.9633 34.2517 28.9633 32C28.9633 29.7483 30.795 27.9167 33.0466 27.9167C35.2983 27.9167 37.13 29.7483 37.13 32C37.13 34.2517 35.2983 36.0833 33.0466 36.0833Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={style.icon_setting}>
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="65" height="65" rx="20" fill="#E84E4E" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26 20.3333C25.0717 20.3333 24.1815 20.7021 23.5251 21.3585C22.8687 22.0148 22.5 22.9051 22.5 23.8333V40.1667C22.5 41.0949 22.8687 41.9852 23.5251 42.6416C24.1815 43.2979 25.0717 43.6667 26 43.6667H33C33.9283 43.6667 34.8185 43.2979 35.4749 42.6416C36.1313 41.9852 36.5 41.0949 36.5 40.1667V23.8333C36.5 22.9051 36.1313 22.0148 35.4749 21.3585C34.8185 20.7021 33.9283 20.3333 33 20.3333H26ZM38.0085 26.5085C38.2273 26.2898 38.524 26.1669 38.8333 26.1669C39.1427 26.1669 39.4394 26.2898 39.6582 26.5085L44.3248 31.1752C44.5436 31.394 44.6664 31.6907 44.6664 32C44.6664 32.3094 44.5436 32.6061 44.3248 32.8248L39.6582 37.4915C39.4381 37.704 39.1434 37.8216 38.8375 37.819C38.5316 37.8163 38.239 37.6936 38.0227 37.4773C37.8064 37.261 37.6837 36.9684 37.681 36.6625C37.6784 36.3566 37.796 36.0619 38.0085 35.8418L40.6837 33.1667H30.6667C30.3572 33.1667 30.0605 33.0438 29.8417 32.825C29.6229 32.6062 29.5 32.3094 29.5 32C29.5 31.6906 29.6229 31.3938 29.8417 31.1751C30.0605 30.9563 30.3572 30.8333 30.6667 30.8333H40.6837L38.0085 28.1582C37.7898 27.9394 37.6669 27.6427 37.6669 27.3333C37.6669 27.024 37.7898 26.7273 38.0085 26.5085Z"
                fill="#1C1C1C"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={style.control_panel}>
        <div className={style.up_info}>
          <div className={style.time_logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <g clip-path="url(#clip0_117_173)">
                <path
                  d="M19.8334 3.8967C21.593 4.9127 23.0568 6.37065 24.0798 8.12622C25.1028 9.88179 25.6496 11.8741 25.666 13.9059C25.6825 15.9378 25.1679 17.9386 24.1734 19.7105C23.1789 21.4824 21.7388 22.9638 19.9958 24.0081C18.2528 25.0524 16.2673 25.6233 14.2358 25.6644C12.2043 25.7056 10.1973 25.2154 8.41352 24.2425C6.62969 23.2696 5.13089 21.8476 4.06549 20.1175C3.00008 18.3873 2.40502 16.4089 2.33921 14.378L2.33337 14L2.33921 13.622C2.40454 11.6072 2.99085 9.64366 4.04095 7.92286C5.09106 6.20207 6.56914 4.78273 8.33108 3.80323C10.093 2.82374 12.0787 2.3175 14.0945 2.33388C16.1104 2.35026 18.0876 2.8887 19.8334 3.8967ZM14 7.00004C13.7143 7.00007 13.4385 7.10499 13.2249 7.29487C13.0114 7.48476 12.875 7.74641 12.8415 8.0302L12.8334 8.1667V14L12.8439 14.1529C12.8705 14.3553 12.9497 14.5472 13.0737 14.7094L13.1752 14.826L16.6752 18.326L16.7849 18.4217C16.9895 18.5804 17.2411 18.6666 17.5 18.6666C17.759 18.6666 18.0106 18.5804 18.2152 18.4217L18.3249 18.3249L18.4217 18.2152C18.5805 18.0106 18.6666 17.759 18.6666 17.5C18.6666 17.2411 18.5805 16.9895 18.4217 16.7849L18.3249 16.6752L15.1667 13.5159V8.1667L15.1585 8.0302C15.1251 7.74641 14.9887 7.48476 14.7751 7.29487C14.5616 7.10499 14.2858 7.00007 14 7.00004Z"
                  fill="#1C1C1C"
                />
              </g>
              <defs>
                <clipPath id="clip0_117_173">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={style.panel_text}>
            <span>Панель управления</span>
          </div>
        </div>
        <div className={style.connect_accounts}>
          <div className={style.text_connect}>
            <span>Подключенные аккаунты</span>
          </div>
          <div className={style.list_accounts}>
            <Card
              id="toggler"
              id1="toggler1"
              text="Авто-перезапуск"
              text1="Офлайн буст"
            />
            <Card
              id="toggler2"
              id1="toggler3"
              text="Авто-перезапуск"
              text1="Офлайн буст"
            />
            <Card
              id="toggler4"
              id1="toggler5"
              text="Авто-перезапуск"
              text1="Офлайн буст"
            />
            <Card
              id="toggler6"
              id1="toggler7"
              text="Авто-перезапуск"
              text1="Офлайн буст"
            />
            <New_account />
          </div>
        </div>
      </div>
    </div>
  );
}