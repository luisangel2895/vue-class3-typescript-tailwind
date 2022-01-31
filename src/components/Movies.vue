<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="word" />
    <div v-if="movies">
      <div v-for="(movie, index) of movies" :key="index">
        {{ movie.original_title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
import { MyType } from "../types/my-type";
import { getMovies } from "../services/movie-service";
import { Movie } from "../types/page-movies";

@Options({
  props: {
    msg: String,
  },
  computed: mapState(["message"]),
  methods: {
    getMovies,
  },
  watch: {
    async word(val: string) {
      await getMovies(val).then((res) => {
        this.movies = res.results;
      });
    },
  },
})
export default class Movies extends Vue {
  msg!: string;
  message!: MyType;
  movies?: Array<Movie> = [];
  word?: string = "";

  async mounted(): Promise<void> {
    console.log("state -> ", this.message);
    await getMovies().then((res) => {
      this.movies = res.results;
    });
  }
}
</script>

<style scoped></style>
