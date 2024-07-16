import React, { useState } from "react";
import styles from "./Contacto.module.css";
import Swal from "sweetalert2";
import axios from "axios";

const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const phoneNumber = "2494482322";
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const successAlert = () => {
    Swal.fire(
      "¡Mensaje enviado!",
      "El correo ha sido enviado correctamente",
      "success"
    );
  };

  const errorAlert = (error) => {
    Swal.fire("!Error!", error, "error");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      await axios.post("https://enfoques-consultora-server.vercel.app/send-email-form", {
        to: "julivicente@yahoo.com.ar",
        subject: `Formulario de contacto [Enfoques Consultora]`,
        contactName: formData.name + formData.lastName,
        contactEmail: formData.email,
        contactPhone: formData.tel,
        text: formData.message,
      });
      successAlert();
      resetForm();
      setLoading(false);
    } catch (error) {
      errorAlert(
        "Error al enviar el formulario. Inténtalo de nuevo más tarde."
      );
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { name, lastName, email, tel, message } = formData;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Por favor, ingresa un nombre.";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "El nombre solo puede contener letras.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Por favor, ingresa un apellido.";
    } else if (!/^[A-Za-z\s]+$/.test(lastName)) {
      newErrors.lastName = "El apellido solo puede contener letras.";
    }

    if (!email.trim()) {
      newErrors.email = "Por favor, ingresa un correo electrónico.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }

    if (!tel.trim()) {
      newErrors.tel = "Por favor, ingresa un número de teléfono.";
    } else if (!/^\d+$/.test(tel)) {
      newErrors.tel = "El número de teléfono solo puede contener números.";
    }

    if (!message.trim()) {
      newErrors.message = "Por favor, ingresa un mensaje.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.contactContainer} id='contacto'>
      <div className={styles.formContainer}>
        <div className={styles.containerNameLast}>
          <div className={styles.inputLabelDiv}>
            <label htmlFor='name'>Nombre</label>
            <input
              onChange={handleChange}
              type='text'
              id='name'
              name='name'
              value={formData.name}
            />
            {errors.name && (
              <span className={styles.errorText}>{errors.name}</span>
            )}
          </div>
          <div className={styles.inputLabelDiv}>
            <label htmlFor='lastName'>Apellido</label>
            <input
              onChange={handleChange}
              type='text'
              id='lastName'
              name='lastName'
              value={formData.lastName}
            />
            {errors.lastName && (
              <span className={styles.errorText}>{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className={styles.inputLabelDiv}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleChange}
            type='email'
            id='email'
            name='email'
            value={formData.email}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </div>
        <div className={styles.inputLabelDiv}>
          <label htmlFor='tel'>Teléfono</label>
          <input
            onChange={handleChange}
            type='tel'
            id='tel'
            name='tel'
            value={formData.tel}
          />
          {errors.tel && <span className={styles.errorText}>{errors.tel}</span>}
        </div>
        <div className={styles.inputLabelDiv}>
          <label htmlFor='message'>Mensaje:</label>
          <textarea
            onChange={handleChange}
            id='message'
            name='message'
            value={formData.message}
          />
          {errors.message && (
            <span className={styles.errorText}>{errors.message}</span>
          )}
        </div>
        {formData.name &&
        formData.lastName &&
        formData.email &&
        formData.tel &&
        formData.message ? (
          <button className={styles.submitButton} onClick={handleSubmit}>
            {!loading ? "Enviar" : null}
            {loading ? <span className={styles.spinner}></span> : null}
          </button>
        ) : (
          <button
            className={styles.submitButtonDisabled}
            onClick={handleSubmit}
            disabled
          >
            Enviar
          </button>
        )}
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.titleContainer}>
          <h2>Contacto</h2>
        </div>
        <div className={styles.dataContainer}>
          <h4>Teléfono:</h4>
          <a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>
            +54 9 249 448 2322
          </a>
          <h4>Dirección:</h4>
          <p>9 de Julio 10, B7000 Tandil, Provincia de Buenos Aires</p>
          <h4>Email:</h4>
          <p>julivicente@yahoo.com.ar</p>
          <h4>Horarios de atencion</h4>
          <p>Lunes a sabado de 10:30 a 18:00 hs</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
