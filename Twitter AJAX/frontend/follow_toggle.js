
class FollowToggle {
  constructor(el) {
    
    this.$el = $(el)
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();

    this.$el.on('click', e => {
      this.handleClick.bind(this)();
    });
  }
  
  render() {
    if (this.followState === "follows") {
      this.$el.html("Unfollow!");
    } else if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
    }
  }
  
  handleClick(e) {
    // e.preventDefault();
    
    let action;
    
    if (this.followState === "follows") {
      
      action = "DELETE";
      this.followState = "unfollowed";
    } else if (this.followState === "unfollowed") {
      action = "POST";
      this.followState = "follows";
    }
    
    $.ajax({
      url: `/users/${this.userId}/follow`,
      method: action,
      dataType: 'JSON'
    }).then(this.render.bind(this))

    // $.ajax({
    //   url: `/users/${this.userId}/follow`,
    //   method: action,
    //   dataType: 'JSON',
    //   success: this.render()
    // })
    
  }

}


module.exports = FollowToggle;