document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const feedbackType = document.getElementById('feedbackType');
  const dynamicFields = document.getElementById('dynamicFields');
  const errorMessageDiv = document.getElementById('errorMessage');
  const urgentCheckbox = document.getElementById('urgent');
  const urgentHidden = document.getElementById('urgent_hidden');

  // Function to render feedback fields based on the selected type
  function renderFeedbackFields(type) {
    let fieldsHTML = '';
    switch (type) {
      case 'board':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="boardFeedback">Board of Directors Feedback (Article II):</label>
            <textarea id="boardFeedback" name="boardFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about the Board of Directors, elections, meetings, or other governance matters..."></textarea>
          </div>
        `;
        break;
      case 'officers':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="officerFeedback">Officers Feedback (Article IV):</label>
            <textarea id="officerFeedback" name="officerFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about the Association's officers, their duties, or performance..."></textarea>
          </div>
        `;
        break;
      case 'meetings':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="meetingFeedback">Meetings Feedback (Article III):</label>
            <textarea id="meetingFeedback" name="meetingFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about Unit Owner meetings, voting procedures, or notifications..."></textarea>
          </div>
        `;
        break;
      case 'enforcement':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="enforcementFeedback">Rules Enforcement Feedback (Article V):</label>
            <textarea id="enforcementFeedback" name="enforcementFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about rule enforcement, fines, hearings, or dispute resolution..."></textarea>
          </div>
        `;
        break;
      case 'records':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="recordsFeedback">Records and Documentation Feedback (Article VII):</label>
            <textarea id="recordsFeedback" name="recordsFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about Association records, access to documents, or transparency..."></textarea>
          </div>
        `;
        break;
      case 'financial':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="financialFeedback">Financial Management Feedback (Articles VII & VIII):</label>
            <textarea id="financialFeedback" name="financialFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share your feedback about budgets, assessments, reserves, or financial reporting..."></textarea>
          </div>
        `;
        break;
      case 'general':
        fieldsHTML = `
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="generalFeedback">General Feedback:</label>
            <textarea id="generalFeedback" name="generalFeedback" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" rows="4" placeholder="Share any other feedback or suggestions about the Association..."></textarea>
          </div>
        `;
        break;
      default:
        fieldsHTML = '';
    }
    dynamicFields.innerHTML = fieldsHTML;
  }

  // Event listener for the feedback type selection
  feedbackType.addEventListener('change', function() {
    renderFeedbackFields(this.value);
  });

  // Event listener for the urgent checkbox
  urgentCheckbox.addEventListener('change', function() {
    urgentHidden.value = this.checked ? 'Yes' : 'No';
  });

  // Form submission event listener
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    if (!form.checkValidity()) {
      displayError("Please fill out all required fields.");
      return;
    }

    const formData = new FormData(this);

    // Submit the form data to Formspree
    fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        displaySuccess("Thank you for your feedback!");
        form.reset(); // Reset the form
        renderFeedbackFields(''); // Clear dynamic feedback fields
        urgentHidden.value = 'No'; // Reset urgent hidden value
      } else {
        displayError("Submission failed, please try again.");
      }
    }).catch(error => {
      displayError("An error occurred. Please check your connection and try again.");
    });
  });

  // Function to display error messages
  function displayError(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.remove('hidden');
    setTimeout(() => errorMessageDiv.classList.add('hidden'), 5000);
  }

  // Function to display success messages
  function displaySuccess(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.remove('hidden', 'bg-red-100', 'text-red-700', 'border-red-300');
    errorMessageDiv.classList.add('bg-green-100', 'text-green-700', 'border-green-300');
    setTimeout(() => errorMessageDiv.classList.add('hidden'), 5000);
  }
});
