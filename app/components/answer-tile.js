import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer){
      if(confirm('Are you sure you want to delete this review?')){
        this.sendAction('destroyAnswer', answer);
      }
    },
    upvote(answer){
      this.sendAction('upvoteAnswer', answer);
    },
    downvote(answer){
      this.sendAction('downvoteAnswer', answer);
    }
  }
});
