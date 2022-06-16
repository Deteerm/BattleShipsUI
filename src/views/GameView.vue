<script setup lang="ts">
import Board from "@/components/Board.vue";
import Chat from '@/components/Chat.vue';
import { useStore, type StateData } from '@/store/index'
import { watch } from 'vue'

const state: StateData = useStore()

watch(() => state.shipsAfloat, () => {
  if (state.shipsAfloat === 0) {
    state.scores.push({score: state.guesses.length, date: new Date(Date.now()).toDateString(),})
    localStorage.setItem('scores', JSON.stringify(state.scores))
  }  
})
</script>

<template>
  <main>
    <section class="container">
      <Board class="board" />
      <Chat />
      <div class="victory" :class="[state.shipsAfloat === 0 ? 'show' : 'dont-show']">
        YOU WIN!
      </div>
    </section>
    <section class="buttons-container">
      <a href="/"><span>{{ state.shipsAfloat ? 'Reset the game' : 'Play again' }}</span></a>
      <router-link to="highscore"><span>Highscores</span></router-link>
			<p class="score">Shots: {{ state.guesses.length }}</p>
    </section>
  </main>
</template>

<style scoped>
.buttons-container .score {
	margin-left: auto;
}

a { 
  box-sizing: border-box;
	margin: 0 20px 0 0;
    color: black;
    text-decoration: none;
}

a {
			--color: #646b8c;

			position: relative;
			text-decoration: none;
			color: var(--color);
			font-family: "Inter", sans-serif;
}
			a:before {
				--line-width: 90%;
				--line-height: 1px;
				--line-easing: ease;
				--line-transition-duration: 300ms;

				content: "";
				position: absolute;
				left: 0;
				bottom: 4px;
				width: var(--line-width);
				height: var(--line-height);
				transform-origin: right;
				transform: scaleX(0);
				background: var(--color);
				transition: transform var(--line-transition-duration) var(--line-easing);
				z-index: 1;
			}

			a:hover:before {
					transform-origin: left;
					transform: scaleX(1);
				}
				a:hover span {
					--deg: -45deg;
        }
					a:hover span:before {
						transform: rotate(var(--deg));
					}
					a:hover span:after {
						transform: translateX(-1px) rotate(var(--deg));
					}


			span {
				--line-arrow-width: 1px;
				--line-arrow-height: 6px;
				--line-arrow-easing: cubic-bezier(0.3, 1.5, 0.5, 1);
				--line-arrow-transition-duration: 200ms;
				--line-arrow-transition-delay: 240ms;
      }
				span:before,
				span:after {
					content: "";
					position: absolute;
					right: -18%;
					bottom: -1px;
					background: var(--color);
					transition: transform var(--line-arrow-transition-duration)
						var(--line-arrow-easing);
					transition-delay: var(--line-arrow-transition-delay);
					z-index: 2;
				}

				span:before {
					width: var(--line-arrow-width);
					height: var(--line-arrow-height);
					transform-origin: 0% 100%;
					transform: rotate(-90deg);
				}

				span:after {
					height: var(--line-arrow-width);
					width: var(--line-arrow-height);
					transform-origin: 100% 0%;
					transform: translateX(-1px) rotate(0deg);
				}

.container {
  display: flex;
  flex-wrap: wrap;
}

 @media screen and (max-width: 880px) {
    .container {
      flex-direction: column;
    }
 }

 .buttons-container {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
  font-size: 1.2rem;
	font-family: "Inter", sans-serif;
 }

 .buttons-container * {
  margin: 0 20px 0 0;
  color: black;
  text-decoration: none;
 }

.board {
  margin-right: 15px;
}

.dont-show {
  display: none;
}
.show {
  display: flex;
}
.victory {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -100%);
    font-size: 5rem;
    background-color: rgba(0, 0, 0, 0.781);
    color: white;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
</style>