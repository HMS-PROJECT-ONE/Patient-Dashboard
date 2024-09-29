document.addEventListener('DOMContentLoaded', () => {
    const patientList = [
        { lastName: 'ONE', firstName: 'Patient', dob: '1988-11-16', age: 32, id: '123456', careLink: 'Not Linked', uploaded: 'Uploaded', lastUploaded: '2021-03-16', flagged: false },
        { lastName: 'TWO', firstName: 'Patient', dob: '2006-05-23', age: 18, id: '123457', careLink: 'Not Linked', uploaded: 'Uploaded', lastUploaded: '2022-06-14', flagged: true },
        { lastName: 'THREE', firstName: 'Patient', dob: '1942-05-01', age: 79, id: '123458', careLink: 'Linked', uploaded: 'Not Uploaded', lastUploaded: '2023-04-12', flagged: false }
    ];

    const tableBody = document.getElementById('patient-list');

    // Function to display patients
    const displayPatients = (patients) => {
        tableBody.innerHTML = '';
        patients.forEach(patient => {
            const row = `
                <tr>
                    <td>${patient.lastName}</td>
                    <td>${patient.firstName}</td>
                    <td>${patient.dob}</td>
                    <td>${patient.age}</td>
                    <td>${patient.id}</td>
                    <td>${patient.careLink}</td>
                    <td>${patient.uploaded}</td>
                    <td>${patient.lastUploaded}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    };

    // Initial display (All Patients)
    displayPatients(patientList);

    // Filter: All Patients
    document.getElementById('all-patients-btn').addEventListener('click', () => {
        displayPatients(patientList);
    });

    // Filter: Flagged Patients
    document.getElementById('flagged-patients-btn').addEventListener('click', () => {
        const flaggedPatients = patientList.filter(patient => patient.flagged);
        displayPatients(flaggedPatients);
    });
});