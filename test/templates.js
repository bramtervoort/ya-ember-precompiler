(function () {Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push(" something ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push(" other ");
  }

  data.buffer.push("<div id=\"testresult\"> ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "value", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" </div>\r\n");
  return buffer;
  
});
})()