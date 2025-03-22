import { useState, useEffect } from "react";
import baseUrl from "../config/config";
import { toast } from "react-toastify";

const StatsForm = ({fetchStatistics,closeModal}) => {
  const [stats, setStats] = useState({});
  const [formData, setFormData] = useState({
    yearsOfExcellence: "",
    livesTouched: "",
    partners: "",
    volunteers: "",
  });

  // ✅ Fetch the existing statistics when the component mounts
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/statistics`);
        const data = await res.json();
        setStats(data);
        setFormData({
          yearsOfExcellence: data.yearsOfExcellence || "",
          livesTouched: data.livesTouched || "",
          partners: data.partners || "",
          volunteers: data.volunteers || "",
        });
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStats();
  }, []);

  // ✅ Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/api/statistics/${stats._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStats(data);
      await fetchStatistics();
      
    } catch (error) {
      console.error("Error updating statistics:", error);
    }
    finally{
      closeModal();
      toast.success("Updated");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg ">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          name="yearsOfExcellence"
          value={formData.yearsOfExcellence}
          onChange={handleChange}
          placeholder="Years of Excellence"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="livesTouched"
          value={formData.livesTouched}
          onChange={handleChange}
          placeholder="Lives Touched"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="partners"
          value={formData.partners}
          onChange={handleChange}
          placeholder="Partners"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="volunteers"
          value={formData.volunteers}
          onChange={handleChange}
          placeholder="Volunteers"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full sm:text-2xl bg-blue text-white py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default StatsForm;
