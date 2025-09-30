"use client";

import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import { WeCodeEvents } from "@/app/data/TimelineData";

export default function AdminPanel() {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showMeme, setShowMeme] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    location: "",
    photos: [""]
  });

  useEffect(() => {
    // Load events
    setEvents(WeCodeEvents);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Enhanced authentication with username and password
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true);
      setError("");
      setFailedAttempts(0);
    } else {
      setFailedAttempts(failedAttempts + 1);
      
      // Show meme after 2 failed attempts
      if (failedAttempts >= 1) {
        setShowMeme(true);
      }
      
      setError("Invalid username or password");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePhotoChange = (index, value) => {
    const updatedPhotos = [...formData.photos];
    updatedPhotos[index] = value;
    setFormData({
      ...formData,
      photos: updatedPhotos
    });
  };

  const addPhotoField = () => {
    setFormData({
      ...formData,
      photos: [...formData.photos, ""]
    });
  };

  const removePhotoField = (index) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      photos: updatedPhotos
    });
  };

  const handleCreateEvent = (e) => {
    e.preventDefault();
    
    // Filter out empty photo URLs
    const filteredPhotos = formData.photos.filter(photo => photo.trim() !== "");
    
    const newEvent = {
      ...formData,
      photos: filteredPhotos
    };
    
    // Add new event to the list
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    
    // Reset form
    setFormData({
      title: "",
      date: "",
      description: "",
      location: "",
      photos: [""]
    });
    
    // In a real app, you would save to a database here
    alert("Event created successfully!");
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      description: event.description,
      location: event.location || "",
      photos: event.photos || [""]
    });
    setIsEditing(true);
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    
    // Filter out empty photo URLs
    const filteredPhotos = formData.photos.filter(photo => photo.trim() !== "");
    
    const updatedEvent = {
      ...formData,
      photos: filteredPhotos
    };
    
    // Update the event in the list
    const updatedEvents = events.map(event => 
      event.title === selectedEvent.title ? updatedEvent : event
    );
    
    setEvents(updatedEvents);
    setIsEditing(false);
    setSelectedEvent(null);
    
    // Reset form
    setFormData({
      title: "",
      date: "",
      description: "",
      location: "",
      photos: [""]
    });
    
    // In a real app, you would update the database here
    alert("Event updated successfully!");
  };

  const handleDeleteEvent = (eventToDelete) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      const updatedEvents = events.filter(event => event.title !== eventToDelete.title);
      setEvents(updatedEvents);
      
      // In a real app, you would delete from the database here
      alert("Event deleted successfully!");
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setSelectedEvent(null);
    setFormData({
      title: "",
      date: "",
      description: "",
      location: "",
      photos: [""]
    });
  };

  // Removed the security check that was causing the black screen
  // Now the page will be accessible directly

  if (showMeme) {
    return (
      <div className="min-h-screen bg-black text-white mt-16 dark flex flex-col items-center justify-center">
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">YOU FOUND THE SECRET ADMIN PAGE!</h1>
          <p className="text-gray-700 mb-4">But its actually just a collection of cat photos and dad jokes.</p>
          <img 
            src="https://i.imgur.com/JXetxQh.jpeg" 
            alt="Admin cat meme" 
            className="w-full h-auto mb-4 rounded-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/logo.png"; // Fallback to logo if image fails to load
            }}
          />
          <button
            onClick={() => {
              setShowMeme(false);
              setFailedAttempts(0);
            }}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Go Back to the REAL Fun
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white mt-16 dark">
        <Navbar />
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Secure Access</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white mt-16 dark">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Event Management</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Event" : "Create New Event"}
            </h2>
            <form onSubmit={isEditing ? handleUpdateEvent : handleCreateEvent}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="e.g., August 2024"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., CSE Seminar Hall"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Photos</label>
                {formData.photos.map((photo, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      value={photo}
                      onChange={(e) => handlePhotoChange(index, e.target.value)}
                      placeholder="Photo URL"
                      className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                      type="button"
                      onClick={() => removePhotoField(index)}
                      className="bg-red-600 text-white px-3 py-2 rounded-r-md hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addPhotoField}
                  className="mt-2 bg-gray-600 text-white py-1 px-3 rounded-md hover:bg-gray-700"
                >
                  Add Photo URL
                </button>
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
                >
                  {isEditing ? "Update Event" : "Create Event"}
                </button>
                
                {isEditing && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Event List */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Existing Events</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-300">{event.date}</p>
                  <p className="text-sm text-gray-400 truncate">{event.description}</p>
                  
                  <div className="mt-3 flex space-x-2">
                    <button
                      onClick={() => handleEditEvent(event)}
                      className="bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteEvent(event)}
                      className="bg-red-600 text-white py-1 px-3 rounded-md text-sm hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}