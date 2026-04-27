import supabase from "./supabase";

/**
 * Supabase CRUD Helper Functions
 * Best practices for Supabase integration with Next.js
 */

/**
 * Contact Management Functions
 */

/**
 * Insert a new contact message
 * @param {Object} contactData - { name, email, message }
 * @returns {Promise<{success: boolean, data: any, error: string|null}>}
 */
export async function createContact(contactData) {
  if (!supabase) {
    return {
      success: false,
      data: null,
      error: "Supabase client not initialized",
    };
  }

  try {
    const { name, email, message } = contactData;

    // Validation
    if (!name || !email || !message) {
      return {
        success: false,
        data: null,
        error: "Missing required fields: name, email, message",
      };
    }

    const { data, error } = await supabase.from("contacts").insert([
      {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      return {
        success: false,
        data: null,
        error: error.message,
      };
    }

    return {
      success: true,
      data: data,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: err.message,
    };
  }
}

/**
 * Fetch all contact messages with optional filtering and sorting
 * @param {Object} options - { limit, offset, sortBy, order }
 * @returns {Promise<{success: boolean, data: any[], pagination: any, error: string|null}>}
 */
export async function fetchContacts(options = {}) {
  if (!supabase) {
    return {
      success: false,
      data: [],
      pagination: null,
      error: "Supabase client not initialized",
    };
  }

  try {
    const {
      limit = 100,
      offset = 0,
      sortBy = "created_at",
      order = "desc",
    } = options;

    // Validation
    const validSortFields = ["created_at", "name", "email"];
    const validOrder = order === "asc" ? "asc" : "desc";
    const finalSortBy = validSortFields.includes(sortBy) ? sortBy : "created_at";
    const parsedLimit = Math.min(Math.max(parseInt(limit, 10) || 100, 1), 1000);
    const parsedOffset = Math.max(parseInt(offset, 10) || 0, 0);

    const { data, error, count } = await supabase
      .from("contacts")
      .select("*", { count: "exact" })
      .order(finalSortBy, { ascending: validOrder === "asc" })
      .range(parsedOffset, parsedOffset + parsedLimit - 1);

    if (error) {
      return {
        success: false,
        data: [],
        pagination: null,
        error: error.message,
      };
    }

    return {
      success: true,
      data: data || [],
      pagination: {
        total: count || 0,
        limit: parsedLimit,
        offset: parsedOffset,
        hasMore: (parsedOffset + parsedLimit) < (count || 0),
      },
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: [],
      pagination: null,
      error: err.message,
    };
  }
}

/**
 * Fetch a single contact by ID
 * @param {string} id - Contact ID
 * @returns {Promise<{success: boolean, data: any, error: string|null}>}
 */
export async function fetchContactById(id) {
  if (!supabase) {
    return {
      success: false,
      data: null,
      error: "Supabase client not initialized",
    };
  }

  try {
    if (!id) {
      return {
        success: false,
        data: null,
        error: "Contact ID is required",
      };
    }

    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return {
        success: false,
        data: null,
        error: error.message,
      };
    }

    return {
      success: true,
      data: data,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: err.message,
    };
  }
}

/**
 * Update a contact message
 * @param {string} id - Contact ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<{success: boolean, data: any, error: string|null}>}
 */
export async function updateContact(id, updates) {
  if (!supabase) {
    return {
      success: false,
      data: null,
      error: "Supabase client not initialized",
    };
  }

  try {
    if (!id) {
      return {
        success: false,
        data: null,
        error: "Contact ID is required",
      };
    }

    const { data, error } = await supabase
      .from("contacts")
      .update(updates)
      .eq("id", id)
      .select();

    if (error) {
      return {
        success: false,
        data: null,
        error: error.message,
      };
    }

    return {
      success: true,
      data: data,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      error: err.message,
    };
  }
}

/**
 * Delete a contact message
 * @param {string} id - Contact ID
 * @returns {Promise<{success: boolean, error: string|null}>}
 */
export async function deleteContact(id) {
  if (!supabase) {
    return {
      success: false,
      error: "Supabase client not initialized",
    };
  }

  try {
    if (!id) {
      return {
        success: false,
        error: "Contact ID is required",
      };
    }

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
}

/**
 * Search contacts by name or email
 * @param {string} searchTerm - Search term
 * @returns {Promise<{success: boolean, data: any[], error: string|null}>}
 */
export async function searchContacts(searchTerm) {
  if (!supabase) {
    return {
      success: false,
      data: [],
      error: "Supabase client not initialized",
    };
  }

  try {
    if (!searchTerm || searchTerm.trim().length === 0) {
      return {
        success: false,
        data: [],
        error: "Search term is required",
      };
    }

    const term = `%${searchTerm.trim()}%`;

    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .or(`name.ilike.${term},email.ilike.${term}`);

    if (error) {
      return {
        success: false,
        data: [],
        error: error.message,
      };
    }

    return {
      success: true,
      data: data || [],
      error: null,
    };
  } catch (err) {
    return {
      success: false,
      data: [],
      error: err.message,
    };
  }
}

export default supabase;
