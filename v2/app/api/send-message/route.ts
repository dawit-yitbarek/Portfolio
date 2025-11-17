import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
        console.log("Message details:", { name, email, phone, message });

        const text =
            `📩 *New Portfolio Message*\n\n` +
            `👤 *Name:* ${name}\n` +
            `📧 *Email:* ${email}\n` +
            `📞 *Phone:* ${phone}\n` +
            `💬 *Message:* ${message}\n` +
            `🕒 *Received at:* ${new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
            ;

        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            chat_id: CHAT_ID,
            text,
            parse_mode: "Markdown",
        });

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("Error sending message:", err.message);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
