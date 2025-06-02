'use client'

import { useEffect, useRef } from 'react'

export default function KanbanBoard() {
  const draggedCardRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.kanban-card')

    cards.forEach((card) => {
      // Desktop: drag start
      card.addEventListener('dragstart', () => {
        draggedCardRef.current = card
        setTimeout(() => (card.style.display = 'none'), 0)
      })

      // Desktop: drag end
      card.addEventListener('dragend', () => {
        setTimeout(() => {
          card.style.display = 'block'
          draggedCardRef.current = null
        }, 0)
      })

      // Mobile: touch start
      card.addEventListener('touchstart', () => {
        draggedCardRef.current = card
        card.style.opacity = '0.5'
      })

      // Mobile: touch move
      card.addEventListener('touchmove', (e) => {
        const touch = e.touches[0]
        const target = document.elementFromPoint(touch.clientX, touch.clientY)
        if (target && target.classList.contains('kanban-column-body')) {
          target.classList.add('bg-highlight') // optional visual feedback
        }
      })

      // Mobile: touch end
      card.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0]
        const target = document.elementFromPoint(touch.clientX, touch.clientY)

        if (
          target &&
          draggedCardRef.current &&
          target.classList.contains('kanban-column-body')
        ) {
          target.appendChild(draggedCardRef.current)
        }

        if (draggedCardRef.current) {
          draggedCardRef.current.style.opacity = '1'
          draggedCardRef.current = null
        }
      })
    })

    const columns = document.querySelectorAll<HTMLElement>('.kanban-column-body')

    // Desktop: allow drop
    columns.forEach((column) => {
      column.addEventListener('dragover', (e) => e.preventDefault())
      column.addEventListener('drop', () => {
        if (draggedCardRef.current) column.appendChild(draggedCardRef.current)
      })
    })
  }, [])

  return (
    <div
      id="kanban-board"
      className="w-full p-8 rounded-sm flex flex-col md:flex-row gap-8"
    >
      {['To Do', 'In Progress', 'Done'].map((status, i) => (
        <div
          key={i}
          className="kanban-column flex-1 px-8 rounded-sm min-h-[300px] bg-secondary"
        >
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{status}</h3>
          <div className="kanban-column-body min-h-[250px]">
            {status === 'To Do' && (
              <>
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
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
