import { NextResponse } from "next/server";


const WEBHOOK_URL = process.env.WEBHOOK_RES_URL;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const response = await fetch(WEBHOOK_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Webhook returned an error" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error in solicitation API:", error);
        return NextResponse.json({ error: "Failed to process solicitation" }, { status: 500 });
    }
}