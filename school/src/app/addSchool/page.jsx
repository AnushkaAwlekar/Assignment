"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./AddSchool.css";

export default function AddSchool() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [msg, setMsg] = useState("");

  // ✅ Protect this page
  useEffect(() => {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin"); // redirect if not logged in
    }
  }, [router]);

  const onSubmit = async (data) => {
    const fd = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (v instanceof FileList) fd.append(k, v[0]);
      else fd.append(k, v);
    });

    const res = await fetch("/api/schools/add", { method: "POST", body: fd });
    const json = await res.json();
    setMsg(json.message || json.error || "Done");
  };

  return (
    <div className="addschool-container">
      <form onSubmit={handleSubmit(onSubmit)} className="addschool-form">
        <h2 className="addschool-title"> Register a School</h2>

        {/* School Name */}
<div>
  <label className="addschool-label">School Name</label>
  <input
    {...register("name", { required: "School name required" })}
    className="addschool-input"
    placeholder="Enter school name"
  />
  {errors.name && <p className="addschool-error">{errors.name.message}</p>}
</div>

{/* Address */}
<div>
  <label className="addschool-label">Address</label>
  <input
    {...register("address", { required: "Address required" })}
    className="addschool-input"
    placeholder="Street address"
  />
  {errors.address && <p className="addschool-error">{errors.address.message}</p>}
</div>

{/* City + State */}
<div className="grid grid-cols-2 gap-4">
  <div>
    <label className="addschool-label">City</label>
    <input
      {...register("city", { required: "City required" })}
      className="addschool-input"
      placeholder="City"
    />
    {errors.city && <p className="addschool-error">{errors.city.message}</p>}
  </div>
  <div>
    <label className="addschool-label">State</label>
    <input
      {...register("state", { required: "State required" })}
      className="addschool-input"
      placeholder="State"
    />
    {errors.state && <p className="addschool-error">{errors.state.message}</p>}
  </div>
        </div>

        {/* Contact Number */}
<div>
  <div className="addschool-field">
    <label className="addschool-label">Contact Number</label>
    {errors.contact && (
      <span className="addschool-error">{errors.contact.message}</span>
    )}
  </div>
  <input
    {...register("contact", {
      required: "Contact number required",
      pattern: { value: /^\d{6,15}$/, message: "Invalid phone" },
    })}
    className="addschool-input"
    placeholder="Phone number"
  />
</div>

{/* Email */}
<div>
  <div className="addschool-field">
    <label className="addschool-label">Email</label>
    {errors.email_id && (
      <span className="addschool-error">{errors.email_id.message}</span>
    )}
  </div>
  <input
    {...register("email_id", {
      required: "Email required",
      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
    })}
    className="addschool-input"
    placeholder="example@email.com"
  />
</div>


        <div>
  <label className="addschool-label">Upload Image</label>
  <input
    type="file"
    {...register("image", { required: "Image required" })}
    className="addschool-file"
  />
  {errors.image && <p className="addschool-error">{errors.image.message}</p>}
</div>

        {/* Submit */}
        <button type="submit" className="addschool-button">Add School</button>

        {msg && <p className="addschool-message">{msg}</p>}
      </form>
    </div>
  );
}
