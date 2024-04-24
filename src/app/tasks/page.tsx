"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const TaskPage = () => {
    const tasks = useQuery(api.tasks.getTasks)
    const deleteTask = useMutation(api.tasks.deleteTask)
    return (
        <div className="p-10 flex flex-col gap-4 items-center">
            <h1 className="text-4xl font-bold">All Tasks are here in real-time.</h1 >
            {
                tasks?.map((task) => (
                    <div key={task._id} className="flex gap-4 items-center">
                        <span className="hover:text-gray-500 cursor-pointer">
                            {task.text}
                        </span>
                        <button className="p-2 bg-cyan-400 hover:bg-cyan-600 rounded-md cursor-pointer" onClick={async () => {
                            await deleteTask({ id: task._id })
                        }}>Delete Task</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TaskPage
