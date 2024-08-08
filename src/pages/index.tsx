import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

const Index = () => {
  // Explicitly type the state
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          defaultValue="all"
          onValueChange={(value) =>
            setFilter(value as 'all' | 'pending' | 'completed')
          } // Type assertion
          className="pt-10"
        >
          <Tabs.List className="mb-4 flex justify-center gap-4">
            <Tabs.Trigger
              value="all"
              className={`rounded-full px-4 py-2 ${
                filter === 'all'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className={`rounded-full px-4 py-2 ${
                filter === 'pending'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className={`rounded-full px-4 py-2 ${
                filter === 'completed'
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="all">
            <TodoList filter={filter} />
          </Tabs.Content>
          <Tabs.Content value="pending">
            <TodoList filter={filter} />
          </Tabs.Content>
          <Tabs.Content value="completed">
            <TodoList filter={filter} />
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

// *QUESTION 6:
//  * -----------
//  * Implement quick filter/tab feature so that we can quickly find todos with
//  * different statuses ("pending", "completed", or both). The UI should look like
//  * the design on Figma.
//  *
//  * NOTE:
//  *  - For this question, you must use RadixUI Tabs component. Its Documentation
//  *  is linked below.
//  *
//  * Documentation references:
//  *  - https://www.radix-ui.com/docs/primitives/components/tabs
