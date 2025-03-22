import React from 'react'

const JourneyForm = ({newJourney,setNewJourney,handleAddJourney}) => {

  
  
  return (
    <form method="dialog" onSubmit={handleAddJourney} className=" flex flex-col gap-3">
    <input
      type="number"
      placeholder="Year"
      className="p-2 border rounded"
      value={newJourney.year}
      onChange={(e) => setNewJourney({ ...newJourney, year: e.target.value })}
    />
    <input
      type="text"
      placeholder="Title"
      className="p-2 border rounded"
      value={newJourney.title}
      onChange={(e) => setNewJourney({ ...newJourney, title: e.target.value })}
    />
    <textarea
      placeholder="Description"
      className="p-2 border rounded"
      value={newJourney.description}
      onChange={(e) => setNewJourney({ ...newJourney, description: e.target.value })}
    ></textarea>
    <button type="submit" className="sm:text-2xl text-white bg-blue p-2 rounded ">
      Add Journey
    </button>
  </form>
  )
}

export default JourneyForm
