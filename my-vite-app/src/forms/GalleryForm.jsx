import React from 'react'

const GalleryForm = ({type,name,handleSubmit,setName,setImage,setType,loading}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="mt-1 block w-full p-2 border rounded-md"
      />
    </div>
    <div>
      <label className="block text-sm font-medium">Type</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="mt-1 block w-full p-2 border rounded-md"
      >
        <option value="SCHOOL MEETUP">School Meetup</option>
        <option value="EDUCATIONAL ASSIST">Educational Assist</option>
        <option value="CAREER COUNSELLING">Career Counselling</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium">Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mt-1 mb-2 block w-full"
      />
    </div>
    <button type="submit" className="sm:text-2xl text-white w-full bg-blue p-1 rounded " disabled={loading}>
     {loading ? "Uploading...":"Add To Gallery"}
    </button>
  </form>
  )
}

export default GalleryForm
