let app = new Vue({
  el: '#app',
  data: {
    addedName: '',
    addedQuestion: '',
    questions:[]
  },

  methods: {
    askQuestion() {
      //Vue.set(app.questions, new Array);
      this.questions.push({
        author: this.addedName,
        text: this.addedQuestion,
      });
      this.addedName = '';
      this.addedQuestion = '';
    },
  },

});
