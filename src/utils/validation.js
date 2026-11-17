export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim())
}

export function validateQuoteForm(form, items) {
  const errors = {}
  if (!String(form.name || '').trim()) errors.name = 'Nombre obligatorio.'
  if (!validateEmail(form.email)) errors.email = 'Correo inválido.'
  if (!items || items.length === 0) errors.items = 'Agrega al menos un producto.'
  if (String(form.name || '').length > 80) errors.name = 'Máximo 80 caracteres.'
  if (String(form.message || '').length > 600) errors.message = 'Máximo 600 caracteres.'
  return errors
}

export function validateContactForm(form) {
  const errors = {}
  if (!String(form.name || '').trim()) errors.name = 'Nombre obligatorio.'
  if (!validateEmail(form.email)) errors.email = 'Correo inválido.'
  if (!String(form.subject || '').trim()) errors.subject = 'Asunto obligatorio.'
  if (!String(form.message || '').trim()) errors.message = 'Mensaje obligatorio.'
  if (!form.accept) errors.accept = 'Debes aceptar el aviso de privacidad de prueba.'
  if (String(form.message || '').length > 800) errors.message = 'Máximo 800 caracteres.'
  return errors
}