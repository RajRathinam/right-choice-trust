import React from 'react'

const StudentStatForm = ({handleSubmit,stats,handleChange}) => {
  return (
    <form onSubmit={handleSubmit} className="sm:space-y-1">
    {Object.keys(stats)
  .filter((key) => key !== "_id") // Exclude _id field
  .map((key) => (
    <div key={key}>
      <label className="block font-medium">{key.replace(/([A-Z])/g, " $1")}</label>
      <input
        type="text"
        name={key}
        value={stats[key]}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
    </div>
  ))}

<button type="submit" className="sm:text-2xl w-full text-white bg-blue p-2 rounded ">
   Update Stats
    </button>
  </form>
  )
}

export default StudentStatForm
