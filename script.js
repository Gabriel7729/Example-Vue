var instance = {
  el: '#app',
  data: {
      counter: 0,
      seen: false,
      workshopMembers: [
          { id: 0, name: 'Gabriel', lastname: 'De La Rosa' },
          { id: 1, name: 'Pedro', lastname: 'Sanchez' },
          { id: 2, name: 'Dhimas', lastname: 'Angeles' }
      ]
  },
  methods: {
      increment: function (num) {
        this.counter += num;
      },
      decrement: function (num) {
        this.counter -= num;
      },
      showList: function (show) {
        this.seen = show;
      }
  }
};
var app = new Vue(instance);