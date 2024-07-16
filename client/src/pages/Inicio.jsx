import React, { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import styles from "./Inicio.module.css";
import QuienesSomos from "./QuienesSomos";
import FloatingWhatsappButton from "../components/FloatingWhatsappButton";
import CompanyAttributes from "../components/CompanyAttributes";
import QueHacemos from "./QueOfrecemos";
import Modal from "react-bootstrap/Modal";
import Contacto from "./Contacto";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const Inicio = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    cv: undefined,
  });
  const fileInputRef = useRef(null);

  const successAlert = () => {
    Swal.fire("¡Perfecto!", "Nos contactaremos con usted pronto", "success");
  };

  const errorAlert = (error) => {
    Swal.fire("!Error!", error, "error");
  };

  const validateForm = () => {
    const { name, lastName, email, cv } = formData;
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

    if (!cv) {
      newErrors.cv = "Por favor, adjunto un archivo valido.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    if (e.target.name === "cv") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("to", "consultoraenfoquescvs@gmail.com");
      formDataToSend.append(
        "subject",
        `CV adjunto de: ${formData.name} ${formData.lastName}`
      );
      formDataToSend.append("cv", formData.cv);

      await axios.post("https://enfoques-consultora-server.vercel.app/send-email-cv", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      successAlert();
      resetForm();
      setLoading(false);
      handleClose();
    } catch (error) {
      errorAlert(
        "Error al enviar el formulario. Inténtalo de nuevo más tarde."
      );
      setLoading(false);
    }

    fileInputRef.current.value = null;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      lastName: "",
      email: "",
      cv: "",
    });
    setErrors({});
  };

  return (
    <div>
      <NavBar />
      <FloatingWhatsappButton phoneNumber={2494482322} />
      <div className={styles.principalActivityContainer}>
        <div></div>
        <h1>Servicios de consultoría política, empresarial e institucional</h1>
      </div>
      <QuienesSomos />
      <CompanyAttributes />
      <QueHacemos />
      <div className={styles.seParteDeNuestroEquipo}>
        <h2>Se parte de nuestro equipo</h2>
        <button onClick={handleShow}>Enviar CV</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Envia tu CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={styles.formContainer} encType='multipart/form-data'>
            <div className={styles.formTop}>
              <div className={styles.formInput}>
                <p>Nombre</p>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
              <div className={styles.formInput}>
                <p>Apellido</p>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className={styles.error}>{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className={styles.formInput}>
              <p>Email</p>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.formInput}>
              <p>Adjuntar CV</p>
              <input
                name='cv'
                type='file'
                ref={fileInputRef}
                accept='.pdf,.doc,.docx'
                onChange={handleChange}
                style={{ border: "none" }}
              />
              {errors.cv && <p className={styles.error}>{errors.cv}</p>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {formData.name &&
          formData.lastName &&
          formData.email &&
          formData.cv ? (
            <button className={styles.buttonSend} onClick={handleSubmit}>
              {!loading ? "Enviar" : null}
              {loading ? <span className={styles.spinner}></span> : null}
            </button>
          ) : (
            <button className={styles.buttonSendDisabled} disabled>
              Enviar
            </button>
          )}
        </Modal.Footer>
      </Modal>
      <Contacto />
      <Footer />
    </div>
  );
};

export default Inicio;
