<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <input type="text" v-model='mytodo'>
    <button @click='addTodo'>添加一条</button>
    <button @click='clearTodo'>清空</button>
    <ul class="todos">
      <li 
        v-for='(todo,i) in todos'
        :key='i'
        :class="{'done':todo.done}"
        @click='toggle(i)' 
        >{{todo.text}}</li>
        <li>
          {{todoNum}}/{{todos.length}}
        </li>
    </ul>
    <div class="toLink" @click="tobird">bird</div>
    <div class="toLink" @click="toPersonal">个人中心</div>
    <div class="toLink" @click="toIndex">跳index页面</div>
    <div class="toLink" @click="toList">跳转list页面</div>
    <div class="toLink" @click="toReport">跳转report页面</div>
    <div @click="toMember">会员</div>
  </div>
</template>

<script>

export default {
  // 数据
  data () {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [
      ]
    }
  },
  // 计算属性
  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length
    }
  },
  // created生命周期，组件创建后执行
  created () {
    // 从本地存储里获取数据
    this.todos = wx.getStorageSync('todos') || []
  },
  methods: {
    // 清空已完成的事情
    clearTodo () {
      this.todos = this.todos.filter(v => !v.done)
      this.updateStorage()
    },
    // 更新本地存储
    updateStorage () {
      wx.setStorageSync('todos', this.todos)
    },
    // 添加事件
    addTodo () {
      if (!this.mytodo) {
        return
      }
      this.todos.push({text: this.mytodo, done: false})
      this.mytodo = ''
      this.updateStorage()
    },
    // 设置事件状态
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
      this.updateStorage()
    },
    tobird(){
      console.log("鸟")
      // 注意pages前面一定要加/
      wx.navigateTo({url:'/pages/bird/main'}) 

    },
    toPersonal(){
      wx.navigateTo({url:'/pages/personal/main'}) 
    },
    toIndex(){
      wx.navigateTo({url:'/pages/index/main'}) 
    },
    toList(){
      wx.navigateTo({url:'/pages/list/main'}) 
    },
    toMember(){
      wx.navigateTo({url:'/pages/member/main'}) 
    },
    toReport(){
      wx.navigateTo({url:'/pages/reports/main'}) 
    }
  }
}
</script>

<style>
.title{
  color:#ed12a3;
  text-align: center;
}
ul.todos{
  margin:20px;
}
input{
  border:2px solid #ed12a3;
}
.done{
  text-decoration: line-through;
}
.toLink{
  font-size: 20px;
  color:#ccc;
  margin-bottom: 30px
}
</style>
