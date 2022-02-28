import React from "react";
import "./portrait.scss";

export const Portrait = () => {
  return (
    <>
      {/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
  </head> */}

      <input
        type="radio"
        id="Palette1"
        name="theme-switch"
        class="theme-switch__input"
        checked
      />
      <label for="Palette1" class="theme-switch__label">
        <span>Palette 1</span>
      </label>

      <input
        type="radio"
        id="Palette2"
        name="theme-switch"
        class="theme-switch__input"
      />
      <label for="Palette2" class="theme-switch__label">
        <span>Palette 2</span>
      </label>

      <input
        type="radio"
        id="Palette3"
        name="theme-switch"
        class="theme-switch__input"
      />
      <label for="Palette3" class="theme-switch__label">
        <span>Palette 3</span>
      </label>

      <input
        type="radio"
        id="Palette4"
        name="theme-switch"
        class="theme-switch__input"
      />
      <label for="Palette4" class="theme-switch__label">
        <span>Palette 4</span>
      </label>

      <main class="wrapper">
        <section class="frame">
          <span class="baloon-1"></span>
          <span class="baloon-1_thread"></span>
          <span class="baloon-2"></span>
          <span class="baloon-2_thread"></span>
          <p class="text">Happy Birthday!</p>
        </section>

        <section class="frame">
          <div class="line_1">
            <span class="triangle_down_1"></span>
            <span class="triangle_down_2"></span>
            <span class="triangle_down_3"></span>
            <span class="triangle_down_4"></span>
          </div>

          <div class="panda">
            <div class="right_ear"></div>
            <div class="left_ear"></div>
            <div class="head">
              <span class="right_eye"></span>
              <span class="left_eye"></span>
              <span class="noce"></span>
              <span class="mouth"></span>
            </div>
            <div class="neck"></div>
          </div>
        </section>

        <section class="frame">
          <span class="baloon-3"></span>
          <span class="baloon-3_thread"></span>

          <div class="giraffe">
            <span class="neck">
              <span class="spot-1"></span>
              <span class="spot-2"></span>
              <span class="spot-3"></span>
            </span>
            <span class="snout">
              <span class="mouth"></span>
            </span>
            <span class="head">
              <span class="right_eye"></span>
              <span class="left_eye"></span>
            </span>
            <span class="right_ear"></span>
            <span class="left_ear"></span>
            <span class="right_horn"></span>
            <span class="left_horn"></span>
          </div>
        </section>
      </main>
    </>
  );
};
