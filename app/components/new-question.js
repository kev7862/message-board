import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions:{
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    saveQuestion1(){
      // var dt = new Date();
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    }
  }
});
