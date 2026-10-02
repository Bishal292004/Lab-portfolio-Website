const API = "https://contact-management-backend-eight.vercel.app/api/contacts";
let contacts = [];
let deleteId = null;
const $ = (id) => document.getElementById(id);
document.addEventListener("DOMContentLoaded", load);
$("addBtn").onclick = () => openForm();
$("emptyAdd").onclick = () => openForm();
$("refresh").onclick = load;
$("search").oninput = render;
$("close").onclick = closeForm;
$("cancel").onclick = closeForm;
$("deleteCancel").onclick = closeDelete;
$("deleteConfirm").onclick = removeContact;
async function load() {
  $("loading").classList.remove("hidden");
  try {
    let r = await fetch(API),
      d = await r.json();
    if (!r.ok) throw Error(d.message);
    contacts = d.data || [];
    $("count").textContent = contacts.length;
    render();
  } catch (e) {
    show(e.message || "Unable to load contacts.", "error");
  } finally {
    $("loading").classList.add("hidden");
  }
}
function render() {
  let q = $("search").value.toLowerCase().trim();
  let list = contacts.filter((c) =>
    [c.name, c.email, c.phone, c.company, c.category].some((v) =>
      String(v || "")
        .toLowerCase()
        .includes(q),
    ),
  );
  $("grid").innerHTML = "";
  $("empty").classList.toggle("hidden", list.length > 0);
  list.forEach((c) => {
    let x = document.createElement("article");
    x.className = "card";
    x.innerHTML = `<h3>${safe(c.name)}</h3><span class="tag">${safe(c.category)}</span><div class="info"><p>📧 ${safe(c.email)}</p><p>📞 ${safe(c.phone)}</p>${c.company ? `<p>🏢 ${safe(c.company)}</p>` : ""}${c.address ? `<p>📍 ${safe(c.address)}</p>` : ""}</div><p class="notes">${safe(c.notes || "")}</p><div class="actions"><button class="btn secondary small" onclick="edit('${c._id}')">Edit</button><button class="btn danger small" onclick="askDelete('${c._id}')">Delete</button></div>`;
    $("grid").appendChild(x);
  });
}
function openForm(c = null) {
  $("form").reset();
  clearErrors();
  $("id").value = c?._id || "";
  $("modalTitle").textContent = c ? "Edit Contact" : "Add Contact";
  if (c) {
    [
      "name",
      "email",
      "phone",
      "company",
      "category",
      "address",
      "notes",
    ].forEach((k) => ($(k).value = c[k] || ""));
  }
  $("modal").classList.remove("hidden");
}
function closeForm() {
  $("modal").classList.add("hidden");
}
window.edit = (id) => {
  let c = contacts.find((x) => x._id === id);
  if (c) openForm(c);
};
window.askDelete = (id) => {
  deleteId = id;
  $("deleteModal").classList.remove("hidden");
};
function closeDelete() {
  deleteId = null;
  $("deleteModal").classList.add("hidden");
}
$("form").onsubmit = async (e) => {
  e.preventDefault();
  clearErrors();
  let c = {
    name: $("name").value.trim(),
    email: $("email").value.trim(),
    phone: $("phone").value.trim(),
    company: $("company").value.trim(),
    category: $("category").value,
    address: $("address").value.trim(),
    notes: $("notes").value.trim(),
  };
  if (!valid(c)) return;
  let id = $("id").value;
  try {
    let r = await fetch(id ? `${API}/${id}` : API, {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(c),
      }),
      d = await r.json();
    if (!r.ok) throw Error(d.message);
    closeForm();
    show(
      id ? "Contact updated successfully." : "Contact added successfully.",
      "success",
    );
    load();
  } catch (e) {
    show(e.message || "Unable to save contact.", "error");
  }
};
async function removeContact() {
  if (!deleteId) return;
  try {
    let r = await fetch(`${API}/${deleteId}`, { method: "DELETE" }),
      d = await r.json();
    if (!r.ok) throw Error(d.message);
    closeDelete();
    show("Contact deleted successfully.", "success");
    load();
  } catch (e) {
    closeDelete();
    show(e.message || "Unable to delete contact.", "error");
  }
}
function valid(c) {
  let ok = true;
  if (c.name.length < 2) {
    $("nameErr").textContent = "Enter at least 2 characters.";
    ok = false;
  }
  if (!/^\S+@\S+\.\S+$/.test(c.email)) {
    $("emailErr").textContent = "Enter a valid email.";
    ok = false;
  }
  if (c.phone.length < 7) {
    $("phoneErr").textContent = "Enter a valid phone number.";
    ok = false;
  }
  return ok;
}
function clearErrors() {
  ["nameErr", "emailErr", "phoneErr"].forEach((id) => ($(id).textContent = ""));
}
function show(t, type) {
  $("message").textContent = t;
  $("message").className = `message ${type}`;
  setTimeout(() => $("message").classList.add("hidden"), 3500);
}
function safe(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
