function darkTheme() {
  let checkbox = document.querySelector('input[type="checkbox"]')

  checkbox.addEventListener('change', function() {
    if(checkbox.checked) {
      document.querySelector('body').classList.add('dark-theme')
      document.querySelector('p').classList.remove('color')
      document.querySelector('p').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark-theme')
      document.querySelector('p').classList.remove('dark')
      document.querySelector('p').classList.add('color')
    }
  })
}