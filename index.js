var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Misery", "Back to the Future", "A New Hope"],
      newMovie: "",
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.newmovie = "";
    },
  },
});
