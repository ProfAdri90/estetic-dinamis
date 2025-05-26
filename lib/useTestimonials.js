// lib/useTestimonials.js
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function useTestimonials(lang = "id") {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      setLoading(true);
      const { data, error } = await supabase
        .from("Testimoni")
        .select("*")
        .eq("lang", lang)
        .order("created_at", { ascending: false });

      if (error) console.error("Fetch error:", error);
      else setTestimonials(data);

      setLoading(false);
    }

    fetchTestimonials();
  }, [lang]);

  return { testimonials, loading };
}
