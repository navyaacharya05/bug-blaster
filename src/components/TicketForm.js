import React, { useState } from "react";

export default function TicketForm({dispatch}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("1");

    const priorityLabels = {
        1: "Low",
        2: "Medium",
        3: "High",
    };

    const clearForm = () => {
        setTitle("");
        setDescription("");
        setPriority("1");
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //make sure the page does not get reloaded
        const ticketData ={
            id:new Date().toISOString(),
            title,
            description,
            priority,
        }
        console.log(ticketData);

        dispatch({
            type: "ADD_TICKET",
            payload:ticketData
        })

        clearForm();
    };
    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    className="form-input"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    type="text"
                    value={description}
                    className="form-input"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <fieldset className="priority-fieldset">
                    <legend>Priority</legend>
                    {
                        //deconstructing an array
                        Object.entries(priorityLabels).map(([value, label]) => (
                            <label key={value} className="priority-label">
                                <input
                                    type="radio"
                                    value={value}
                                    checked={priority === value}
                                    className="priority-input"
                                    onChange={(e) =>
                                        setPriority(e.target.value)
                                    }
                                ></input>
                                {label}
                            </label>
                        ))
                    }
                </fieldset>
                <button type="submit" className="button">Submit</button>
            </div>
        </form>
    );
}
