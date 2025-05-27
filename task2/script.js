function registerUser() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate required fields
  if (!username || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password length (minimum 6 characters)
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }

  // If validation passes, hide the registration form and show the gallery
  document.getElementById("registrationForm").style.display = "none";
  document.getElementById("gallerySection").style.display = "block";
}

function addImage() {
  const imageUrlInput = document.getElementById("imageUrl");
  const imageUrl = imageUrlInput.value.trim();

  // Basic validation for the image URL
  if (!imageUrl) {
    alert("Please enter an image URL.");
    return;
  }

  // Check if the URL looks like an image (basic check for common image extensions)
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp)$/i;
  if (!imageExtensions.test(imageUrl)) {
    alert("Please enter a valid image URL (jpg, jpeg, png, gif, or webp).");
    return;
  }

  const gallery = document.getElementById("gallery");

  // Create a new gallery item
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-item";

  // Create the image element
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "Gallery Image";
  img.onerror = () => {
    alert("Failed to load the image. Please check the URL and try again.");
    gallery.removeChild(galleryItem);
  };

  // Create the remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = "×";
  removeBtn.onclick = () => {
    gallery.removeChild(galleryItem);
  };

  // Append image and remove button to the gallery item
  galleryItem.appendChild(img);
  galleryItem.appendChild(removeBtn);

  // Append the gallery item to the gallery
  gallery.appendChild(galleryItem);

  // Clear the input field
  imageUrlInput.value = "";
}