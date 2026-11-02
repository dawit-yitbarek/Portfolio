import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

        // Helper function to escape HTML special characters from user input
        const escapeHtml = (str: string) => {
            if (!str) return '';
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        };

        // Format date and time explicitly in a UTC+3 time zone (Africa/Nairobi)
        const receivedAt = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Africa/Nairobi'
        });

        const text =
            `<b>📩 New Portfolio Message</b>\n\n` +
            `<b>👤 Name:</b> ${escapeHtml(name)}\n` +
            `<b>📧 Email:</b> ${escapeHtml(email)}\n` +
            `<b>📞 Phone:</b> ${escapeHtml(phone || 'N/A')}\n` +
            `<b>💬 Message:</b> ${escapeHtml(message)}\n\n` +
            `<i>🕒 Received at: ${receivedAt} (UTC+3)</i>`;

        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML",
        });

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("Error sending message:", err.message || err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
