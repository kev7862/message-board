import Ember from 'ember';

export default Ember.Component.extend({
  action: {
  delete(question){
    if(confirm('Are you sure you want to delete this question?')){
      this.sendAction('destroyQuestion', question);
    }
  },
  update(question, params){
    this.sendAction('update', question, params);
  }
  }
});