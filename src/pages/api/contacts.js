import supabase from "@/utils/supabase";

/**
 * API Route Handler for Contact Operations
 * Supports:
 * - POST: Insert a new contact message
 * - GET: Retrieve all contact messages (optional query params for filtering)
 */

export default async function handler(req, res) {
  // Ensure Supabase is configured
  if (!supabase) {
    console.error(
      "[API] Supabase client not initialized. Check environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
    return res.status(503).json({
      error: "Database service is not configured. Please check server logs.",
      details: process.env.NODE_ENV !== "production" 
        ? "Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local" 
        : undefined
    });
  }

  // Handle POST - Insert contact message
  if (req.method === "POST") {
    return handlePostContact(req, res);
  }

  // Handle GET - Retrieve contact messages
  if (req.method === "GET") {
    return handleGetContacts(req, res);
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["POST", "GET"]);
  return res.status(405).json({
    error: `Method ${req.method} not allowed`,
  });
}

/**
 * Handle POST requests - Insert a new contact message
 */
async function handlePostContact(req, res) {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Missing required fields: name, email, message",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("contacts").insert([
      {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({
        error: "Failed to save contact message",
        details: error.message,
      });
    }

    return res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      data: data,
    });
  } catch (error) {
    console.error("POST /api/contacts error:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
}

/**
 * Handle GET requests - Retrieve contact messages
 * Query params:
 * - limit: Number of records to return (default: 100)
 * - offset: Number of records to skip (default: 0)
 * - sortBy: Sort field (created_at, name, email) - default: created_at
 * - order: Sort order (asc, desc) - default: desc
 */
async function handleGetContacts(req, res) {
  try {
    const {
      limit = 100,
      offset = 0,
      sortBy = "created_at",
      order = "desc",
    } = req.query;

    // Validate query parameters
    const parsedLimit = Math.min(parseInt(limit, 10) || 100, 1000); // Max 1000 records
    const parsedOffset = Math.max(parseInt(offset, 10) || 0, 0);
    const validSortFields = ["created_at", "name", "email"];
    const validOrder = order === "asc" ? "asc" : "desc";
    const finalSortBy = validSortFields.includes(sortBy) ? sortBy : "created_at";

    // Fetch contacts
    let query = supabase
      .from("contacts")
      .select("*", { count: "exact" })
      .order(finalSortBy, { ascending: validOrder === "asc" })
      .range(parsedOffset, parsedOffset + parsedLimit - 1);

    const { data, error, count } = await query;
    console.log("data", data)

    if (error) {
      console.error("Supabase select error:", error);
      return res.status(500).json({
        error: "Failed to retrieve contacts",
        details: error.message,
      });
    }

    return res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error("GET /api/contacts error:", error);
    return res.status(500).json({
      error: "Internal server error",
      details: error.message,
    });
  }
}
