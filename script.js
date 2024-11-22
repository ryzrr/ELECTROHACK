// Mock data for reports
const reports = [
    { id: 1, type: 'Pothole', location: '123 Main St', status: 'Open', date: '2023-06-01' },
    { id: 2, type: 'Broken Streetlight', location: '456 Elm St', status: 'In Progress', date: '2023-05-30' },
    { id: 3, type: 'Graffiti', location: '789 Oak St', status: 'Resolved', date: '2023-05-28' },
    { id: 4, type: 'Suspicious Activity', location: '321 Pine St', status: 'Under Review', date: '2023-05-27' },
];

// DOM elements
const authButton = document.getElementById('auth-button');
const authModal = document.getElementById('auth-modal');
const authForm = document.getElementById('auth-form');
const toggleAuthButton = document.getElementById('toggle-auth');
const reportForm = document.getElementById('report-form');
const reportsTable = document.getElementById('reports-table').getElementsByTagName('tbody')[0];

// Authentication state
let isLoggedIn = false;
let isSignUp = false;

// Event listeners
authButton.addEventListener('click', toggleAuthModal);
toggleAuthButton.addEventListener('click', toggleAuthMode);
authForm.addEventListener('submit', handleAuth);
reportForm.addEventListener('submit', handleReportSubmission);

// Functions
function toggleAuthModal() {
    authModal.style.display = authModal.style.display === 'block' ? 'none' : 'block';
}

function toggleAuthMode() {
    isSignUp = !isSignUp;
    document.getElementById('auth-modal-title').textContent = isSignUp ? 'Sign Up' : 'Log In';
    toggleAuthButton.textContent = isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up";
}

function handleAuth(e) {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    isLoggedIn = true;
    authButton.textContent = 'Log Out';
    toggleAuthModal();
}

function handleReportSubmission(e) {
    e.preventDefault();
    const type = document.getElementById('issue-type').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    // Here you would typically send this data to a server
    console.log('Report submitted:', { type, location, description });

    alert('Report submitted successfully!');
    reportForm.reset();
}

function populateReportsTable() {
    reportsTable.innerHTML = '';
    reports.forEach(report => {
        const row = reportsTable.insertRow();
        row.innerHTML = `
            <td>${report.type}</td>
            <td>${report.location}</td>
            <td>${report.status}</td>
            <td>${report.date}</td>
        `;
    });
}

// Initialize the page
populateReportsTable();

