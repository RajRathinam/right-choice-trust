import React from 'react'

const TeamForm = ({handleSubmit,setName,setTitle,setLocation,location,qualifications,name,title,setQualifications,setImage,loading}) => {
  return (
    <form onSubmit={handleSubmit} className=" flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border w-full p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Role"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border w-full p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="border w-full p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Qualifications"
          value={qualifications}
          onChange={(e) => setQualifications(e.target.value)}
          required
          className="border w-full p-2 mr-2"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue w-full text-lg text-white p-2"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Member"}
        </button>
      </form>

  )
}

export default TeamForm
