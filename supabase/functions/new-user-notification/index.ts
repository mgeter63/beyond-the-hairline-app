import "@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_EMAIL = "mgeter29@gmail.com";
const FROM_EMAIL = "Beyond the Hairline <onboarding@resend.dev>";

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    console.log("[WEBHOOK] Received payload:", JSON.stringify(payload));

    const record = payload.record;
    if (!record) {
      return new Response(JSON.stringify({ error: "No record in payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userEmail = record.email || "Unknown";
    const createdAt = record.created_at
      ? new Date(record.created_at).toLocaleString("en-US", {
          timeZone: "America/Chicago",
          dateStyle: "full",
          timeStyle: "short",
        })
      : new Date().toLocaleString("en-US", {
          timeZone: "America/Chicago",
          dateStyle: "full",
          timeStyle: "short",
        });

    const subject = "New Beyond the Hairline Registration";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #7c3aed;">New User Registration</h2>
        <p>A new user has registered for <strong>Beyond the Hairline</strong>.</p>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${userEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; background: #f9fafb; font-weight: bold;">Registered</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${createdAt}</td>
          </tr>
        </table>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        subject: subject,
        html: htmlBody,
      }),
    });

    const body = await res.text();
    console.log(`[EMAIL] Status: ${res.status}, To: ${NOTIFY_EMAIL}, Response: ${body}`);

    const result = res.ok ? "sent" : `failed (${res.status})`;
    console.log("Notification result:", result);

    return new Response(JSON.stringify({ success: res.ok, email: result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error processing notification:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});
