import React, { useState } from 'react';

const HOAFeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    unitNumber: '',
    email: '',
    feedbackType: '',
    boardFeedback: '',
    officerFeedback: '',
    meetingFeedback: '',
    enforcementFeedback: '',
    recordsFeedback: '',
    financialFeedback: '',
    generalFeedback: '',
    urgent: false,
    contactPreference: 'email'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Optional to keep for now

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      unitNumber: '',
      email: '',
      feedbackType: '',
      boardFeedback: '',
      officerFeedback: '',
      meetingFeedback: '',
      enforcementFeedback: '',
      recordsFeedback: '',
      financialFeedback: '',
      generalFeedback: '',
      urgent: false,
      contactPreference: 'email'
    });
    setSubmitted(false);
  };

  const renderFeedbackFields = () => {
    switch(formData.feedbackType) {
      case 'board':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Board of Directors Feedback (Article II):
            </label>
            <textarea
              name="boardFeedback"
              value={formData.boardFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about the Board of Directors, elections, meetings, or other governance matters..."
            ></textarea>
          </div>
        );
      case 'officers':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Officers Feedback (Article IV):
            </label>
            <textarea
              name="officerFeedback"
              value={formData.officerFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about the Association's officers, their duties, or performance..."
            ></textarea>
          </div>
        );
      case 'meetings':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Meetings Feedback (Article III):
            </label>
            <textarea
              name="meetingFeedback"
              value={formData.meetingFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about Unit Owner meetings, voting procedures, or notifications..."
            ></textarea>
          </div>
        );
      case 'enforcement':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Rules Enforcement Feedback (Article V):
            </label>
            <textarea
              name="enforcementFeedback"
              value={formData.enforcementFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about rule enforcement, fines, hearings, or dispute resolution..."
            ></textarea>
          </div>
        );
      case 'records':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Records and Documentation Feedback (Article VII):
            </label>
            <textarea
              name="recordsFeedback"
              value={formData.recordsFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about Association records, access to documents, or transparency..."
            ></textarea>
          </div>
        );
      case 'financial':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Financial Management Feedback (Articles VII & VIII):
            </label>
            <textarea
              name="financialFeedback"
              value={formData.financialFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share your feedback about budgets, assessments, reserves, or financial reporting..."
            ></textarea>
          </div>
        );
      case 'general':
        return (
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              General Feedback:
            </label>
            <textarea
              name="generalFeedback"
              value={formData.generalFeedback}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Share any other feedback or suggestions about the Association..."
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">322 5th Avenue Building HOA Bylaws Feedback Form</h2>
      
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
          {errorMessage}
        </div>
      )}
      
      <form action="https://formspree.io/f/xovepbab" method="POST">
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Unit Number:</label>
          <input
            type="text"
            name="unitNumber"
            value={formData.unitNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Feedback Category:</label>
          <select
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          >
            <option value="">Select a category</option>
            <option value="board">Board of Directors (Article II)</option>
            <option value="meetings">Unit Owner Meetings (Article III)</option>
            <option value="officers">Officers (Article IV)</option>
            <option value="enforcement">Rules Enforcement (Article V)</option>
            <option value="records">Records and Documentation (Article VII)</option>
            <option value="financial">Financial Management (Articles VII & VIII)</option>
            <option value="general">General Feedback</option>
          </select>
        </div>

        {renderFeedbackFields()}

        <div className="mb-6 mt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="urgent"
              checked={formData.urgent}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-gray-700">This is an urgent matter requiring immediate attention</span>
          </label>
          <input type="hidden" name="urgent_hidden" value={formData.urgent ? "Yes" : "No"} />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Preferred Contact Method:</label>
          <div className="mt-2">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={formData.contactPreference === 'email'}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">Email</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                checked={formData.contactPreference === 'phone'}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">Phone</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="none"
                checked={formData.contactPreference === 'none'}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700">No response needed</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Submit Feedback
          </button>
        </div>

        <div className="mt-4 text-sm text-center">
          By submitting this form, you agree to our terms and conditions.
        </div>
      </form>
    </div>
  );
};

export default HOAFeedbackForm;
