"use server";

import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder"
);

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  property_address: z.string().min(5, "Address is required"),
  property_type: z.enum(["House", "Apartment", "Villa", "Commercial"]),
  size_sqft: z.string().optional(),
});

export async function captureLead(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    property_address: formData.get("property_address") as string,
    property_type: formData.get("property_type") as any,
    size_sqft: formData.get("size_sqft") as string,
    source: "Valuation Form",
    status: "new",
  };

  const validated = leadSchema.safeParse(data);
  if (!validated.success) {
    return { error: validated.error.issues[0].message };
  }

  try {
    // 1. Insert into Supabase
    const { error: supabaseError } = await supabase
      .from("leads")
      .insert([data]);

    if (supabaseError) {
      console.error("Supabase Error:", supabaseError);
      return { error: "Failed to save lead information." };
    }

    // 2. Send Email via Resend
    await resend.emails.send({
      from: "Haven & Co <onboarding@resend.dev>",
      to: "solomonfiverr98@gmail.com",
      subject: `New Valuation Lead: ${data.name}`,
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Address:</strong> ${data.property_address}</p>
        <p><strong>Type:</strong> ${data.property_type}</p>
        <p><strong>Size:</strong> ${data.size_sqft} sqft</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Capture Lead Error:", err);
    return { error: "Something went wrong. Please try again later." };
  }
}
