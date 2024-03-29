"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/store";
import { signOut, useSession } from "next-auth/react";

const ProfilePage = () => {
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const [user, setUser] = useRecoilState(userState);
  const [updatingDetails, setUpdatingDetails] = useState(false);

  // Initialize newUsername and newEmail with the correct types
  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleLogout = async () => {
    try {
      signOut();
      toast.success("Logout Successful!");
    } catch (error: any) {
      console.error("Error during logout:", error.message);
    }
  };

  const handleUpdateDetails = () => {
    // Toggle the state to show/hide the update details form
    setUpdatingDetails((prev) => !prev);
  };

  const handleChangeUsername = (e: any) => {
    setNewUsername(e.target.value);
  };

  const handleChangeEmail = (e: any) => {
    setNewEmail(e.target.value);
  };

  const handleUpdateSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Send the updated details to the server
      const response = await axios.put("/api/users/update", {
        username: newUsername,
        email: newEmail,
      });
      // Log the success message
      console.log("Details updated successfully:", response.data.message);
      // Fetch updated user details
    } catch (error: any) {
      console.error("Error updating details:", error.message);
    } finally {
      // Reset the form and hide the update details form
      setNewUsername("");
      setNewEmail("");
      setUpdatingDetails(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
        <p className="text-3xl lg:text-4xl text-white pt-32 px-10">
          Loading...
        </p>
        ;
      </div>
    );
  }

  return (
    <div className="bg-bg-star bg-cover min-h-screen bg-left lg:bg-center">
      <div className="container mx-auto p-8">
        <h2 className="font-minecraft text-5xl lg:text-6xl text-white pt-32 px-10">
          Welcome, {user}!
        </h2>

        <div className="bg-white bg-opacity-10 p-6 rounded-md shadow-md mt-8">
          <h3 className="text-xl font-medium text-white mb-4">
            Your Profile Details
          </h3>
          <p className="text-gray-300">
            <strong>Email:</strong> {newEmail}
          </p>
        </div>

        {updatingDetails ? (
          // Update Details Form
          <form
            className="bg-white bg-opacity-10 p-6 rounded-md shadow-md mt-8"
            onSubmit={handleUpdateSubmit}
          >
            <h3 className="text-xl font-medium text-white mb-4">
              Update Your Details
            </h3>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                New Username:
              </label>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={handleChangeUsername}
                className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                New Email:
              </label>
              <input
                type="email"
                id="email"
                value={newEmail}
                onChange={handleChangeEmail}
                className="w-full px-3 py-2 border rounded-md focus:outline-none border-gray-300"
              />
            </div>
            {/* Add more fields as needed */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Update
            </button>
          </form>
        ) : (
          // Buttons for Logout and Update Details
          <div className="flex justify-between mt-8">
            <button
              onClick={handleUpdateDetails}
              disabled
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            >
              Update Details
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
