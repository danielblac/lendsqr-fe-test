"use client";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";

export default function Login() {
  // DECLARATION
  const router = useRouter();

  // ZOD VALIDATION
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "Password should be minimum 5 characters" }),
  });

  //STATES
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [formErrorResult, setFormErrorResult] = useState<any>();
  const [error, setError] = useState("");

  // FUNCTIONS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formResult = formSchema.safeParse(formData);

    if (formResult.success === false) {
      const error = formResult.error;
      let newErrors = {};
      for (const issues of error.issues) {
        newErrors = {
          ...newErrors,
          [issues.path[0]]: issues.message,
        };
      }
      setFormErrorResult(newErrors);
    }

    if (formResult.success) {
      setLoading(true);
      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 3000);
    }
  };

  // USEEFFECT
  useEffect(() => {
    if (formErrorResult?.email) {
      setEmailError(true);
      setEmailErrorMessage(formErrorResult?.email);
    } else if (formErrorResult?.password) {
      setPasswordError(true);
      setPasswordErrorMessage(formErrorResult?.password);
    }
  }, [formErrorResult]);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 10000);
  }, [error]);

  return (
    <div className="login-page">
      <div className="lendsqr-logo">
        <Image
          src="/images/logo.png"
          alt="lendsqr-logo"
          width={24.7}
          height={25}
        />
        <h1>lendsqr</h1>
      </div>
      <div className="lendsqr">
        <Image
          src="/images/login-photo.png"
          alt="cover-photo"
          width={600}
          height={337}
          className="cover-photo"
        />
      </div>
      <div className="login">
        <div className="login-container">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <div className={emailError ? "input-error" : "input"}>
                <input
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setEmailError(false);
                    setEmailErrorMessage("");
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              {emailErrorMessage && (
                <span className="error-message">{emailErrorMessage}</span>
              )}
              <div className={passwordError ? "input-error" : "input"}>
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPasswordError(false);
                    setPasswordErrorMessage("");
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                />
                <div onClick={() => setVisible(!visible)} className="eye">
                  {visible ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {passwordErrorMessage && (
                <span className="error-message">{passwordErrorMessage}</span>
              )}
              <p className="forget-password">FORGOT PASSWORD</p>
            </div>
            <button type="submit">
              {loading ? (
                <CircularProgress color="inherit" size={30} thickness={5} />
              ) : (
                <span>LOG IN</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
