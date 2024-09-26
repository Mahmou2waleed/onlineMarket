// List of governorates and their cities
const locations = {
  "Cairo": ["cairo"],
  "Alexandria": ["alexandria"],
  "Giza": ["giza", "6th of October", "Sheikh Zayed"],
  "Dakahlia": ["Mansoura", "Talkha", "Mit Ghamr"],
  "Red Sea": ["Hurghada", "Safaga", "El Quseir"],
  "Beheira": ["Damanhur", "Kafr El Dawwar", "Rashid"],
  "Fayoum": ["Fayoum", "Ibshaway", "Sinnuris"],
  "Gharbia": ["Tanta", "Al Mahalla Al Kubra", "Kafr El Zayat"],
  "Ismailia": ["Ismailia", "Fayed", "Qantara"],
  "Monufia": ["Shibin El Kom", "Menouf", "Sadat City"],
  "Minya": ["Minya", "Mallawi", "Beni Mazar"],
  "Qalyubia": ["Banha", "Qalyub", "Shubra El Kheima"],
  "New Valley": ["Kharga", "Dakhla", "Farafra"],
  "Suez": ["Suez"],
  "Aswan": ["Aswan", "Kom Ombo", "Edfu"],
  "Assiut": ["Assiut", "Dairut", "Manfalut"],
  "Beni Suef": ["Beni Suef", "Wasta", "Nasser"],
  "Port Said": ["Port Said"],
  "Damietta": ["Damietta", "New Damietta", "Faraskur"],
  "Sharkia": ["Zagazig", "Belbeis", "10th of Ramadan"],
  "South Sinai": ["Sharm El Sheikh", "Dahab", "Nuweiba"],
  "Kafr El Sheikh": ["Kafr El Sheikh", "Desouk", "Baltim"],
  "Matrouh": ["Marsa Matrouh", "El Alamein", "Siwa"],
  "Luxor": ["Luxor"],
  "Qena": ["Qena", "Nag Hammadi", "Qus"],
  "North Sinai": ["Arish", "Sheikh Zuweid", "Rafah"],
  "Sohag": ["Sohag", "Akhmim", "Gerga"]
};

// Function to populate select options
function populateSelect(selectElement, options) {
  options.forEach(option => {
    const opt = document.createElement('option');
    opt.value = option;
    opt.text = option;
    selectElement.appendChild(opt);
  });
}

// Populate governorates and cities
document.addEventListener('DOMContentLoaded', () => {
  const governoratesSelect = document.getElementById('governorates');
  const citiesSelect = document.getElementById('cities');

  // Populate governorates
  const governorates = Object.keys(locations);
  populateSelect(governoratesSelect, governorates);

  // Update cities when governorate changes
  governoratesSelect.addEventListener('change', function () {
    // Clear existing cities
    citiesSelect.innerHTML = '';

    // Get selected governorate
    const selectedGovernorate = governoratesSelect.value;

    // Populate cities for selected governorate
    if (selectedGovernorate) {
      const cities = locations[selectedGovernorate];
      populateSelect(citiesSelect, cities);
    }
  });

  // Trigger change event to populate cities on page load
  governoratesSelect.dispatchEvent(new Event('change'));
});
