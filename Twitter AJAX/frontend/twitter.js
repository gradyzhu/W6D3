const FollowToggle = require('./follow_toggle.js');


$( () => {
  let $el = $('.follow-toggle');
  
  $el.each( (idx, el) => {
    
    new FollowToggle(el);
  })
})