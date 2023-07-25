
const form = document.querySelector('form');
const url = 'https://script.google.com/macros/s/AKfycbx9Uq2DfLyQxDSKU2CU55_aP_wnhgx4r-WvmFC7LTRzehuihkdNUxD4UGXKH58C2fdbZg/exec';

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  }
});
