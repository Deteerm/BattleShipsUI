<script lang="ts" setup>
import { useStore} from '@/store/index'
import type Score from '@/types/Score'

const state = useStore()

function compare(a: Score, b: Score) {
  if (a.score < b.score) {
    return -1;
  }
  if (a.score > b.score) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
</script>
<template>
  <div class="highscores">
    <h1 class="mb-1">Your highscores:</h1>
    <h3 class="score-record" :class="{'mb-2': i === state.scores.length - 1}" v-for="(score, i) in state.scores.slice(0, 10).sort(compare)">
    <span>Shots: {{ score.score }}</span><span>{{ score.date }}</span></h3>
    <h3 v-if="state.scores.length === 0">No scores recorded yet</h3>
    <router-link class="link" to="/"><span>Go back</span></router-link>
  </div>
</template>

<style scoped>
a {
			--color: black;

			position: relative;
			text-decoration: none;
			color: var(--color);
			font-family: "Inter", sans-serif;
}
			a:before {
				--line-width: 115%;
				--line-height: 1px;
				--line-easing: ease;
				--line-transition-duration: 300ms;

				content: "";
				position: absolute;
				left: 0;
				bottom: -1px;
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

  .highscores {
    padding: 1rem 3rem;
    box-shadow: 0 4px 2px -2px gray;
    font-size: 1.2rem;
  }
  .score-record {
    width: 100%;
    min-width: 250px;
    display: flex;
    justify-content: space-between;
  }

  .mb-2 {
    margin-bottom: 2rem;
  }

  .mb-1 {
    margin-bottom: 1rem;
  }
</style>
