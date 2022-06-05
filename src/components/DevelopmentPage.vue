<template>
  <div class="DevelopmentPage">
<section class="AboutS">
      <h1 class="mt-5">Лексикон</h1>
      <ul>
        <div class="lead">
          <li>
            <strong>Плагин Ergo</strong> - мем в администрации. Сравним с "Игни,
            серв лёг". Из-за худшей оптимизации в мире, этот "набор кода" ронял
            сервер. Игни больше полугода не могу понять в чём проблема из-за
            чего выразился противоречиво, когда он смог подтвердить сильное
            влияние этого плагина на состояние сервера, Ergo забил болт. В
            апреле 2022 года, в течении 1 дня, Ergo переписал плагин и он стал
            намного лучше, относительного того, что было. Но мем так и остался
            мемом и теперь, когда администрация видит низкий TPS, то ржёт над
            этим, так как опять виноват плагин Ergo. Или же такой подход - "Мой
            хост настолько мощный, что может потянуть плагин Ergo на 10
            человек". Игни ржёт
          </li>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
    name: 'DevelopmentPage',
 data: function () {
        return {
          users: []
        }
    },

    methods: {

      getUsers: function() {

        var app = this;
// eslint-disable-next-line
         Vue.prototype.$axios.get('/users')
            .then(function (response) {
            app.users = response.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });

      }

    },

    created() {
      this.getUsers();
    },
};
</script>

<style lang="scss">

</style>