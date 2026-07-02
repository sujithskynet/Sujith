// Placeholder logic: if a real photo is provided later, set the src on #avatarImg
  // and it will automatically replace the initial letter.
  const img = document.getElementById('avatarImg');
  const initial = document.getElementById('avatarInitial');
  if (img.getAttribute('src')) {
    img.style.display = 'block';
    initial.style.display = 'none';
  }
