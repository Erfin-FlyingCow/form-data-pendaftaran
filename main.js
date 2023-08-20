let noTo = "6285156382918";

function buildWhatsAppLink(formData) {
  let { nama, noHp, NIK, alamat, kelurahan, kecamatan, kota } = formData;

  let fullAddress = `${alamat}, ${kelurahan}, ${kecamatan}, ${kota}`;
  let message = `Nama        : ${nama}\n`;
  message += `Nomor HP : ${noHp}\n`;
  message += `NIK            : ${NIK}\n`;
  message += `Alamat       : \n${fullAddress}`;

  let link = `https://wa.me/${encodeURIComponent(
    noTo
  )}?text=${encodeURIComponent(message)}`;
  console.log(link);
  return link;
}

function validateForm() {
  let formData = {
    nama: document.getElementById("nama").value,
    noHp: document.getElementById("noHp").value,
    NIK: document.getElementById("NIK").value,
    alamat: document.getElementById("alamat").value,
    kelurahan: document.getElementById("kelurahan").value,
    kecamatan: document.getElementById("kecamatan").value,
    kota: document.getElementById("kota").value,
  };

  if (
    formData.nama === "" ||
    formData.noHp === "" ||
    formData.NIK === "" ||
    formData.kota === ""
  ) {
    alert(
      "Harap isi semua kolom yang diperlukan (Nama, No HP, NIK, dan Kota atau Kabupaten)."
    );
    return false;
  }

  let whatsappLink = buildWhatsAppLink(formData);
  window.open(whatsappLink, "_blank");
  return false;
}
