Vue.component("tabs", {
  data(){
      return {
        tabs: []
      }
  },
  template: `
    <div>
      <div class="tabs">
        <ul>
            <li v-for="tab in tabs"> {{tab.name}} </li>
        </ul>
      </div>

      <div class="tabs-details">
        <slot></slot>
      </div>
    </div>
  `
});

Vue.component('tab', {
  props: {
    name: {required : true}
  }, 
  template: `
  <div><slot></slot></div>
  `
})

Vue.component("task-list", {
  template: '<div> <task v-for="task in tasks"> {{task.task}} </task> </div>',
  data() {
    return {
      tasks: [
        { task: "go to the store", completed: true },
        { task: "go to the gym", completed: true },
        { task: "go to the beatch", completed: false },
        { task: "go to the club", completed: true },
        { task: "go to the farm", completed: false },
        { task: "go to the work", completed: true }
      ]
    };
  }
});

Vue.component("modal", {
  props: ["content"],
  template: `
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class='box'>
            <p>
                {{content}}            
            </p>
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `
});

Vue.component("message", {
  data() {
    return {
      isShow: true
    };
  },
  props: ["body", "titleg"],
  template: `
    <article class="message" v-show="isShow">
    <div class="message-header">
      <p>{{titleg}}</p>
      <button class="delete" aria-label="delete" @click="hide"></button>
    </div>
    <div class="message-body">
      {{body}}
    </div>
  </article>
    `,
  methods: {
    hide() {
      this.isShow = false;
    }
  }
});

Vue.component("task", {
  template: "<li><slot></slot></li>"
});

new Vue({
  el: "#root",
  data: {
    showModal: false
  },
  methods: {
    showM() {
      this.showModal = true;
    },
    hideM() {
      this.showModal = true;
    }
  }
});
