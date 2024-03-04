Page({
  data: {
    // 待办列表
    todoList: [
      {
        thing: '上午8点取药',
        completed: true
      },
      {
        thing: '上午8点半取药',
        completed: true
      },
      {
        thing: '中午12点半取药',
        completed: false
      },
      {
        thing: '下午1点半取药',
        completed: false
      },
      {
        thing: '下午带101房王多金老人做康复训练',
        completed: false
      },
    ],
    todoThing: ""
  },
  todoClick(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      [`todoList[${index}].completed`]: !this.data.todoList[index].completed
    })
  },
  todoThingInput(e) {
    this.setData({ todoThing: e.detail.value })
  },
  addClick() {
    this.setData({
      [`todoList[${this.data.todoList.length}]`]: {
        thing: this.data.todoThing,
        completed: false
      },
      todoThing: ''
    })
  },
  deleteClick(e) {
    let index = e.currentTarget.dataset.index;
    this.data.todoList.splice(index, 1)
    this.setData({
      todoList: this.data.todoList
    })
  }
})
