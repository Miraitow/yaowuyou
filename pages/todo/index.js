Page({
  data: {
    // 待办列表
    todoList: [],
    todoThing: ""
  },

  todoClick(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      [`todoList[${index}].completed`]: !this.data.todoList[index].completed
    })
  },
  todoThingInput(e) {
    if(e.detail.value!==''){
      this.setData({ todoThing: e.detail.value })
    }
  },
  addClick() {
    if(this.data.todoThing!==''){
      this.setData({
        [`todoList[${this.data.todoList.length}]`]: {
          thing: this.data.todoThing,
          completed: false
        },
        todoThing: ''
      })
    }
  },
  deleteClick(e) {
    let index = e.currentTarget.dataset.index;
    this.data.todoList.splice(index, 1)
    this.setData({
      todoList: this.data.todoList
    })
  },
  onLoad(){
    if(wx.getStorageSync("todolist")){
        this.setData({todoList:wx.getStorageSync("todolist")})
      }
  },
  onUnload(){
    wx.setStorageSync('todolist', this.data.todoList)
  }
})
