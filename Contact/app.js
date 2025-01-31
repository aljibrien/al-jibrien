function sendToWhatsApp(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari formulir
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Format pesan
    const whatsappNumber = '6289626880034'; // Ganti dengan nomor WhatsApp tujuan
    const text = `Assalamualaikum, Nama ku ${name}.%0A ${message}`;

    // Redirect ke WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
}