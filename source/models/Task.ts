import { ObservableObject, transaction } from 'reactronic'

export class Task extends ObservableObject {
  description: string
  isCompleted: boolean
  isEditing: boolean

  constructor(description: string) {
    super()
    this.description = description
    this.isCompleted = false
    this.isEditing = false
  }

  changeActivity(): void {
    this.isCompleted = !this.isCompleted
  }
}
