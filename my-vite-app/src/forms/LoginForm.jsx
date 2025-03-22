import { useState } from "react";
import baseUrl from "../config/config";

export default function LoginForm({getUser,closeLoginModal}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // Store token
        getUser();
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong. Try again.");
    }finally{
        setEmail("");
        setPassword("");
        closeLoginModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue sm:text-2xl text-white py-2 mt-2 rounded">
            Login
          </button>
        </form>
  );
}
