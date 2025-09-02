import { NextResponse } from "next/server";
import pool from "@/utils/db";
import multer from "multer";
import fs from "fs";
import path from "path";

const upload = multer({ dest: "uploads/" });

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");

    const imageFile = formData.get("image");
    let imagePath = null;

    if (imageFile && imageFile.name) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      imagePath = `/uploads/${Date.now()}-${imageFile.name}`;
      fs.writeFileSync(path.join(uploadDir, `${Date.now()}-${imageFile.name}`), buffer);
    }

    await pool.query(
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, address, city, state, contact, email_id, imagePath]
    );

    return NextResponse.json({ message: "School added successfully!" });
  } catch (err) {
    console.error("Error adding school:", err);
    return NextResponse.json({ error: "Failed to add school" }, { status: 500 });
  }
}
