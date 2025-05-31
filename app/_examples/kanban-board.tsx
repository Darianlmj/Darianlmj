'use client'

import { useEffect } from 'react'

export default function KanbanBoard() {
  useEffect(() => {
    let draggedCard: HTMLElement | null = null

    const cards = document.querySelectorAll('.kanban-card')
    cards.forEach((card) => {
      card.addEventListener('dragstart', () => {
        draggedCard = card as HTMLElement
        setTimeout(() => ((card as HTMLElement).style.display = 'none'), 0)
      })

      card.addEventListener('dragend', () => {
        setTimeout(() => {
          ;(card as HTMLElement).style.display = 'block'
          draggedCard = null
        }, 0)
      })
    })

    const columns = document.querySelectorAll('.kanban-column-body')
    columns.forEach((column) => {
      column.addEventListener('dragover', (e) => e.preventDefault())
      column.addEventListener('drop', () => {
        if (draggedCard) column.appendChild(draggedCard)
      })
    })
  }, [])

  return (
    <div
      id="kanban-board"
      className="w-full p-8 rounded-sm flex flex-col md:flex-row gap-8"
    >
      <div className="kanban-column flex-1 px-8 rounded-sm min-h-[300px] bg-secondary">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          To Do
        </h3>
        <div className="kanban-column-body min-h-[250px]">
          <div
            className="kanban-card font-semibold border-l-4 border-l-blue-500 shadow-sm bg-white dark:bg-slate-600 transition-all ease-in-out duration-100 hover:bg-slate-200 dark:hover:bg-slate-600 p-4 mb-4 cursor-move"
            draggable
          >
            Task 1
          </div>
          <div
            className="kanban-card font-semibold border-l-4 border-l-blue-500 shadow-sm bg-white dark:bg-slate-600 transition-all ease-in-out duration-100 hover:bg-slate-200 dark:hover:bg-slate-600 p-4 mb-4 cursor-move"
            draggable
          >
            Task 2
          </div>
        </div>
      </div>
      <div className="kanban-column flex-1 px-8 rounded-sm min-h-[300px] bg-secondary">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          In Progress
        </h3>
        <div className="kanban-column-body min-h-[250px]" />
      </div>
      <div className="kanban-column flex-1 px-8 rounded-sm min-h-[300px] bg-secondary">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Done
        </h3>
        <div className="kanban-column-body min-h-[250px]" />
      </div>
    </div>
  )
}
