import { Div, Img, RxDiv, RxLI } from 'reactronic-front'
import { style } from './TaskLine.css'
import { Task } from '../models/Task'
import { App } from '../models/App'

export function TaskLine(id: string, task: Task, app: App) {
  return (
    RxLI('Task' + id, task, e => {
      let inputArea: HTMLDivElement
      e.className = style.class.Task
      e.classList.toggle('selected', app.draggingTask === task)

      e.associatedData.drag = !task.isCompleted && !task.isEditing ? task : undefined

      if (!task.isEditing) {
        Div('Task-element', e => {
          e.associatedData.pointer = () => task.changeActivity()
          e.className = style.class.TaskElement
          e.setAttribute('rx-inactive', task.isCompleted ? 'true' : 'false')
          e.innerHTML = task.description
        })
      }
      else {
        Div('Task', e => {
          e.className = style.class.Input
          inputArea = e
          inputArea.contentEditable = 'true'
          inputArea.associatedData.keyboard = () => {
            if (inputArea.innerHTML.trim() !== '') {
              app.editTask(task, inputArea.innerHTML)
            }
          }
          e.innerHTML = task.description
        })
      }
      if (!task.isCompleted) {
        Div('Edit', e => {
          e.associatedData.pointer = () => task.isEditing ? app.editTask(task, inputArea.innerHTML) : app.editTask(task)
          e.className = style.class.Edit
          Img('Edit-icon', e => {
            e.src = task.isEditing ? './assets/check.svg' : './assets/pencil.svg'
          })
        })
      }
      Div('Delete', e => {
        e.associatedData.pointer = () => app.deleteTask(task)
        e.className = !task.isCompleted ? style.class.Delete : style.class.InactiveDelete
        Img('Delete-icon', e => {
          e.src = './assets/trash.svg'
        })
      })
    })
  )
}
