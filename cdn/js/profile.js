const addressDiv = document.querySelector('[name="Address"]')
let address = document.querySelector('[name="Address"]').innerText;
address = address.replaceAll('Address', '')
address = address.replace(':', '').trim()

let iframe = document.createElement("iframe");
iframe.classList.add('map-frame')
iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
addressDiv.appendChild(iframe);

let allPs = document.getElementsByTagName('p')
let footer = allPs[allPs.length - 1]
footer.classList.add('footer')