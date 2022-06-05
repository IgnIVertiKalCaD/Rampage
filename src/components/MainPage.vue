<template>
  <div class="tree">
    <ul>
      <li>
        <figure class="VelocityIffect">
          <img class="Velocity" :src="Velocity" />
          <figcaption>
            <strong>Velocity</strong> - прокси сервер для создания комплекса серверов нашего
            проекта.
          </figcaption>
        </figure>
        <ul style="margin-top: -5px;">
          <li>
            <figure class="VelocityIffect">
              <img class="GuardServer" :src="Guard"/>
              <figcaption style="padding: 12% 5%;">
                <strong>LOX-Guard</strong> - работает на KauriVPN. Блокирует людей с прокси и VPN. Справляется на 9\10, но есть минус - некоторые не могут зайти на сервер. Плагин стоит на V, A, R (см. "О проекте").
              </figcaption>
            </figure>
            <ul style=" margin-top: -6px;">
              <li>
                <figure class="VelocityIffect" style="margin-bottom: -5px;">
                  <img class="Velocity" :src="Auth" />
                  <figcaption>
                    <strong>Auth</strong> - сервер авторизации, который перкидывает, пока что, только на сервер Rampage.
                  </figcaption>
                </figure>
                <ul>
                  <li>
                    <figure class="VelocityIffect">
                      <img class="Velocity" :src="Rampage" />
                      <figcaption>
                        <strong>Rampage CWC</strong> - главный сервер нашего проекта.
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import Velocity from "../assets/Velocity.webp";
import Guard from "../assets/Guard.webp";
import Auth from "../assets/Auth.webp";
import Rampage from "../assets/Rampage.webp";


export default {
  name: "MainHeader",
  props: {},
  data: function () {
    return {
      Velocity: Velocity,
      Auth:Auth,
      Rampage:Rampage,
      Guard:Guard
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/MainPage.scss";
strong {
  font-size: 18px;
}
</style>
