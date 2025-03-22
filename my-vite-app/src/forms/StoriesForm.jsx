import React from 'react'

const StoriesForm = ({handleSubmit,handleChange,story,handleFileChange,loading}) => {
  return (

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={story.name} onChange={handleChange} className="border p-2 w-full rounded" required />
        <textarea name="quote" placeholder="Quote" value={story.quote} onChange={handleChange} className="border p-2 w-full rounded" required />
        <input type="text" name="degree" placeholder="Degree" value={story.degree} onChange={handleChange} className="border p-2 w-full rounded" required />
        <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 w-full rounded" />
        <button type="submit" className="bg-blue w-full text-lg text-white px-4 py-2 rounded">  {loading ? "Uploading...":"Add"}</button>
      </form>
  )
}

export default StoriesForm;
