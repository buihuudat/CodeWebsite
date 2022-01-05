<template>
  <div id="app">
    <div class="wrapper clearfix">

      <players
        v-bind:isWinner="isWinner"
        v-bind:activePlayer="activePlayer"
        v-bind:currentScore="currentScore"
        v-bind:scoresPlayer="scoresPlayer"
      />

      <controls
        v-bind:isPlaying="isPlaying"
        v-bind:finalScore="finalScore"
        v-on:handleChangeFinalScore="handleChangeFinalScore"
        v-on:handleHoldScore="handleHoldScore"
        v-on:handleNewGame="handleNewGame"
        v-on:handleRollDice="handleRollDice"
      />

      <dices
        v-bind:dices="dices"
      />

      <popup-rule
        v-on:handleConfirm="handleConfirm"
        v-bind:isOpenPopup="isOpenPopup"
      />

    </div>
  </div>
</template>

<script>
import Players from './components/Players.vue'
import Controls from './components/Controls.vue'
import Dices from './components/Dices.vue'
import PopupRule from './components/PopupRule.vue'

export default {
  name: 'app',
  data () {
    return {
      isPlaying: false,
      isOpenPopup: false,
      activePlayer: 0,
      scoresPlayer: [0, 0],
      dices: [2, 6],
      currentScore: 0,
      finalScore: 10
    }
  },
  components: {
    Players,
    Controls,
    Dices,
    PopupRule
  },
  computed: {
    isWinner () {
      let { scoresPlayer, finalScore } = this

      if (scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.isPlaying = false
        return true
      }
    }
  },
  methods: {
    handleChangeFinalScore (e) {
      var number = parseInt(e.target.value)
      if (isNaN(number)) {
        this.finalScore = ''
      } else {
        this.finalScore = number
      }
    },
    handleHoldScore () {
      if (this.isPlaying) {
        let { scoresPlayer, activePlayer, currentScore } = this
        let scoreOld = scoresPlayer[activePlayer]

        this.$set(this.scoresPlayer, activePlayer, scoreOld + currentScore)

        if (!this.isWinner) {
          this.nextPlayer()
        }
      } else {
        alert('Vui long nhan vao nut NewGame')
      }
    },
    nextPlayer () {
      this.activePlayer = this.activePlayer === 0 ? 1 : 0
      this.currentScore = 0
    },
    handleRollDice () {
      if (this.isPlaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1

        this.dices = [dice2, dice2]
        if (dice1 === 1 || dice2 === 1) {
          let activePlayer = this.activePlayer
          setTimeout(function () {
            alert(`Nguoi choi Player ${activePlayer + 1} đã quay trúng số 1. Rất diệm`)
          }, 10)

          this.nextPlayer()
        } else {
          this.currentScore = this.currentScore + dice1 + dice2
        }
      } else {
        alert('Vui lòng nhất vào nút NewGame')
      }
    },
    handleConfirm () {
      this.isPlaying = true
      this.isOpenPopup = false
      this.activePlayer = 0
      this.dices = [1, 1]
      this.scoresPlayer = [0, 0]
      this.currentScore = 0
    },
    handleNewGame () {
      this.isOpenPopup = true
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, .3);
  overflow: hidden;
}
</style>
