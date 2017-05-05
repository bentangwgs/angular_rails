angular.module('myApp').component('twitPage', {
  templateUrl: '/assets/templates/twit_template.html',
  controller: function twitController($http) {
    var self = this;

    $http.get('/get_twits').then(function (response) {
      self.twits = response.data;
    });

    this.shareTwit = function () {
      if(!this.msg || this.msg === '') {
        alert("Twit can't empty");
      }else{
        var obj = {};
        $http({
          method: 'POST',
          url: '/create_twit',
          data: {twit: self.msg}
        }).then(function (response) {
          data = response.data;
          obj.id = data.id;
          obj.twit = data.twit;
          obj.created_at = data.created_at;
        });

        this.twits.unshift(obj);
        this.msg = "";
      }
    };
    this.deleteTwit = function(id){
      return $http.delete('/delete_twit/'+id).then(function(data) {
        console.log(dd = data);
        console.log(ff = self.twits);
        console.log(tt = self);
        for (var i = self.twits.length -1; i >=0; i--) {
          if(self.twits[i].id === id) {
              self.twits.splice(i, 1);
          }
        }
      })
     // alert("Task Id is "+id);
    };

  }
});